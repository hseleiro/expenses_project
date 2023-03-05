import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";

type ViewModel = {
  itemFrom: number;
  itemTo: number;
  total: number;
  previousDisabled: boolean;
  nextDisabled: boolean;
  pageIndex: number;
  itemsPerPage: number;
}

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  /**
   * Notifies the parent when the page has changed
   **/
  @Output() readonly pageIndexChange = new EventEmitter<number>();

  /**
   * The amount of items a page should show
   **/
  @Input() set itemsPerPage(value: number) {
    this.itemsPerPage$$.next(value);
  }

  /**
  * Total Items in the database
  **/
  @Input() set total(value: number) {
    this.total$$.next(value);
  }

  /**
   * The index of the page (starts at 0)
   **/
  @Input() set pageIndex(value: number) {
    this.pageIndex$$.next(value);
  }

  /**
   * Behaviour subjects with initial value
   **/
  private readonly itemsPerPage$$ = new BehaviorSubject<number>(0)
  private readonly total$$ = new BehaviorSubject<number>(0)
  private readonly pageIndex$$ = new BehaviorSubject<number>(0)

  readonly vm$: Observable<ViewModel> = combineLatest({
    itemsPerPage: this.itemsPerPage$$,
    total: this.total$$,
    pageIndex: this.pageIndex$$
}).pipe(
  map(({itemsPerPage, total, pageIndex}) => {
    return {
      total,
      previousDisabled: pageIndex === 0,
      nextDisabled: pageIndex >= Math.ceil(total / itemsPerPage) - 1,
      itemFrom: pageIndex * itemsPerPage + 1,
      itemTo: pageIndex < Math.ceil(total / itemsPerPage) - 1 ? pageIndex * itemsPerPage + itemsPerPage : total,
      pageIndex,
      itemsPerPage
    }
  })
  )

  constructor() { }

  ngOnInit(): void {
  }

  goToStart(): void {
    this.pageIndexChange.emit(0);
  }

  previous(vm: ViewModel): void {
    this.pageIndexChange.emit(vm.pageIndex - 1);
  }

  next(vm: ViewModel): void {
    this.pageIndexChange.emit(vm.pageIndex + 1);
  }

  goToEnd(vm: ViewModel): void {
    this.pageIndexChange.emit(Math.ceil(vm.total / vm.itemsPerPage) - 1)
  }

}
