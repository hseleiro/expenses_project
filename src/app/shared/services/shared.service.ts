import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getRouterState} from "../state";
import {RouterStateUrl} from "../router-state/custom-serializer";
import {RouterReducerState} from "@ngrx/router-store";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private routerState: RouterReducerState<RouterStateUrl> | undefined;

  constructor(private store: Store,
  ) {}

  // Router state
  get getRouterState(): RouterReducerState<RouterStateUrl> | undefined {
    this.store.pipe(select(getRouterState)).subscribe((routerStore) => {
      this.routerState = routerStore
    });
    return this.routerState;
  }

}
