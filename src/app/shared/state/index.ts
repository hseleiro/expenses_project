import * as fromWelcome from "./welcome.reducer";
import * as fromTodo from "./todo.reducer";
import * as fromTProfile from "./profile.reducer";
import {ActionReducerMap, MetaReducer} from "@ngrx/store";

export interface State {
  welcome: fromWelcome.State,
  todo: fromTodo.State
  profile: fromTProfile.State
}

export const reducers: ActionReducerMap<State> = {
  welcome: fromWelcome.reducer,
  todo: fromTodo.reducer,
  profile: fromTProfile.reducer
}

export const metaReducers: MetaReducer<State>[] = [];
