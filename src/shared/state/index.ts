import * as fromWelcome from "./welcome.reducer";
import * as fromTodo from "./todo.reducer";
import {ActionReducerMap, MetaReducer} from "@ngrx/store";

export interface State {
  welcome: fromWelcome.State,
  todo: fromTodo.State
}

export const reducers: ActionReducerMap<State> = {
  welcome: fromWelcome.reducer,
  todo: fromTodo.reducer
}

export const metaReducers: MetaReducer<State>[] = [];
