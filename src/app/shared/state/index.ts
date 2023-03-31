import {ActionReducerMap, createFeatureSelector, MetaReducer} from "@ngrx/store";
import * as fromApi from "./reducers/api.reducer";
import * as fromTodo from "../../private/todo/reducers/todo.reducer";
import * as fromProfile from "../../private/profile/reducers/profile.reducer";
import * as fromRouter from '@ngrx/router-store';
import * as fromWelcome from "../../public/welcome/reducers/welcome.reducer";
import {routerReducer } from "@ngrx/router-store";
import {RouterStateUrl} from "../router-state/custom-serializer";

export interface State {
  api: fromApi.State
  todo: fromTodo.State
  profile: fromProfile.State
  router: fromRouter.RouterReducerState<any>;
  welcome: fromWelcome.State,
}

export const reducers: ActionReducerMap<State> = {
  api: fromApi.reducer,
  todo: fromTodo.reducer,
  profile: fromProfile.reducer,
  router: routerReducer,
  welcome: fromWelcome.reducer,
}

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');
export const metaReducers: MetaReducer<State>[] = [];
