import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProfilePageActions} from "./actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private store: Store,) { }

  ngOnInit(): void {
    this.store.dispatch(ProfilePageActions.enter())
  }

  navigateTo(routeName: string):void {
    this.router.navigate([`/public/${routeName}`]);

  }
}
