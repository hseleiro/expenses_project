import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WelcomePageActions } from "../welcome/actions"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(WelcomePageActions.enter())
  }

}
