import {createAction, props} from "@ngrx/store";
import {Todo} from "../../../../shared/models/todo";

export const todosLoaded = createAction(
  '[Todos APi] Todos Loaded Success',
  props<{ todos: Todo[]}>()
)

export const todoCreated = createAction(
  '[Todos API] Todo Created Success',
  props<{ todo: Todo}>()
)

export const todoUpdated = createAction(
  '[Todos API] Todo Updated Success',
  props<{ todo: Todo}>()
)

export const todoDeleted = createAction(
  '[Todos API], Todo Deleted Success',
  props<{ todoId: string}>()
)
