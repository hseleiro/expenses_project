import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { WelcomePageActions } from "../welcome/actions"
import {TranslocoService} from "@ngneat/transloco";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {saveExpense} from "./actions/welcome-page.actions";
import {Router} from "@angular/router";
import {firstValueFrom, Observable, Subscription} from "rxjs";
import {RouterStateUrl} from "../../shared/router-state/custom-serializer";
import {RouterReducerState} from "@ngrx/router-store";
import {SharedService} from "../../shared/services/shared.service";
import {HttpClient} from "@angular/common/http";
import {ExpensesService} from "../../shared/services/expenses.service";

type ViewModel = {
  numberOfConcerts: [{artistName: string, total: number}, {artistName: string, total: number}]
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  /* listOfConcerts: [{artistName: string, date: string}, {artistName: string, date: string}] = [
    {
      artistName: 'Trivium',
      date: '04-02-2023'
    },
    {
      artistName: 'Rammstein',
      date: '15-07-2023'
    }
  ] */

  addExpenseForm: FormGroup | undefined;
  private getRouterSubscription: Subscription | undefined;
  private routerStore: RouterReducerState<RouterStateUrl> | undefined;
  expenses: Observable<any> | undefined;

  constructor(private store: Store,
              private translocoService: TranslocoService,
              private fb: FormBuilder,
              private router: Router,
              private sharedService: SharedService,
              private expensesService: ExpensesService,
  ) {}

  ngOnInit(): void {
    this.routerStore = this.sharedService.getRouterState;
    this.expenses = this.expensesService.getExpenses;
    console.log('this.routerStore',  this.routerStore)

    // Page actions
    this.store.dispatch(WelcomePageActions.enter())

    this.addExpenseForm = this.fb.group({
      expense: 0
    })
  }

  ngOnDestroy() {
    this.getRouterSubscription?.unsubscribe();
  }

  /* form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }); */

  form = new FormGroup({
    expense: new FormControl(0),
  });



  test() {
    if(!this.addExpenseForm?.value) {
      return;
    }
    const expenseForm = this.addExpenseForm.value;
    this.store.dispatch(saveExpense(expenseForm))
  }

  // test

  /* changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  getName(): void {
    console.log('Hugo')
  } */

  navigateTo(routeName: string): void {
    this.router.navigate([`/private/${routeName}`], {queryParams: {title: 'Teste'}});
  }
}
