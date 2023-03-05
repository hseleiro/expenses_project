import * as fromWelcome from "./welcome.reducer";
import * as fromTodo from "./todo.reducer";
import * as fromTProfile from "./profile.reducer";
import * as fromRouter from '@ngrx/router-store';
import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from "@ngrx/store";
import {routerReducer } from "@ngrx/router-store";
import {RouterStateUrl} from "../router-state/custom-serializer";

export interface State {
  welcome: fromWelcome.State,
  todo: fromTodo.State
  profile: fromTProfile.State
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  welcome: fromWelcome.reducer,
  todo: fromTodo.reducer,
  profile: fromTProfile.reducer,
  router: routerReducer
}

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');
export const metaReducers: MetaReducer<State>[] = [];
