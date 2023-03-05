import {Todo} from "../models/todo";
import {Action, createReducer, on} from "@ngrx/store";
import {TodoPageActions} from "../../private/todo/actions";

export interface State {
  collection: Todo[];
  activeTodoId: string | null;
}

export const initialState: State = {
  collection: [],
  activeTodoId: null
}

export const todoReducer = createReducer(
  initialState,
  on(
    TodoPageActions.enter,
    TodoPageActions.clearSelectedTodo, (state, action) => {
    return {
      ...state,
      activeTodoId: null
    }
  }),
  on(TodoPageActions.selectTodo, (state, action) => {
    return {
      ...state,
      activeTodoId: action.todoId
    }
  })
)

export function reducer(state: undefined | State, action: Action) {
  return todoReducer(state, action)
}
