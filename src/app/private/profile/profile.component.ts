import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfilePageActions} from "./actions";
import {Store} from "@ngrx/store";
import {SharedService} from "../../shared/services/shared.service";
import {RouterStateUrl} from "../../shared/router-state/custom-serializer";
import {RouterReducerState} from "@ngrx/router-store";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private routerStore: RouterReducerState<RouterStateUrl> | undefined;

  constructor(private router: Router, private store: Store, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.routerStore = this.sharedService.getRouterState;
    console.log('this.routerStore',  this.routerStore)

    // Page actions
    this.store.dispatch(ProfilePageActions.enter())
  }

  ngOnDestroy() {

  }

  navigateTo(routeName: string):void {
    this.router.navigate([`/public/${routeName}`]);
  }
}
