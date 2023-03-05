import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {filter, map, pairwise, throttleTime, timer} from "rxjs";

interface Fiches {
  mood: string,
  fish: string,
  colours: string[]
}


@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})

export class InfiniteScrollComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) scroller!: CdkVirtualScrollViewport;

  listItems: any = [];
  fiches: Fiches[] = []
  loading: boolean = false;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.fiches = [
      {
        mood: "happy",
        fish: "robin",
        colours: ["blue", "green"]
      },
      {
        mood: "tired",
        fish: "panther",
        colours: ["green", "black", "orange", "blue"]
      },
      {
        mood: "sad",
        fish: "goldfish",
        colours: ["green", "red"]
      }
    ]
    this.getColors();
    this.fetchMore();
  }

  ngAfterViewInit() {
    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset("bottom")),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1) && (y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.fetchMore();
      })
    })
  }

  fetchMore(): void {

    const newItems: { title: string; content: string; }[] = []

    for (let i = 0; i < 5; i++) {

      const randomListNumber = Math.round(Math.random() * 100);

      newItems.push({
        title: 'List Item' + randomListNumber,
        content: 'Description' + randomListNumber,
      })

      this.loading = true;
      timer(1000).subscribe(() => {
        this.loading = false;
        this.listItems = [...this.listItems, ...newItems];
      })
    }
  }

  getColors() {
    let flattenedArray : string[] = [];
    let colours = this.fiches.map((fish) => {
      return fish.colours
    })

    flattenedArray = colours.reduce((total, subArray) => {
      return total.concat(subArray)
    }, [])

    // console.log('flattenedArray', flattenedArray);

    const initialValue  = 0

    const sum = [{x: 1}, {x: 2}, {x: 3}].reduce((accumulator, actualValue) => accumulator + actualValue.x, initialValue)

  }




}
