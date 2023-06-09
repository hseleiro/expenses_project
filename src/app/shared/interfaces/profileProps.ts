import {RouterReducerState} from "@ngrx/router-store";
import {RouterStateUrl} from "../router-state/custom-serializer";

export interface ProfileContent {
  routerStore: RouterReducerState<RouterStateUrl> | undefined,
  navigateTo(routeName: string): void
}
