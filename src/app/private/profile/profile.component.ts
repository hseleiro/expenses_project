import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfilePageActions} from "./actions";
import {Store} from "@ngrx/store";
import {SharedService} from "../../shared/services/shared.service";
import {RouterStateUrl} from "../../shared/router-state/custom-serializer";
import {RouterReducerState} from "@ngrx/router-store";
import {ConsoleLogHelper} from "../../shared/directives/console.log";
import {ProfileContent} from "../../shared/interfaces/profileProps";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends ConsoleLogHelper implements OnInit, ProfileContent {
  routerStore: RouterReducerState<RouterStateUrl> | undefined;

  constructor(private router: Router, private store: Store, private sharedService: SharedService) {
    super();
  }

  ngOnInit(): void {
    this.routerStore = this.sharedService.getRouterState;
    this.consoleLog('this.routerStore',  this.routerStore)

    // Page actions
    this.store.dispatch(ProfilePageActions.enter())
  }

  navigateTo(routeName: string): void {
    this.router.navigate([`/public/${routeName}`]);
  }
}
