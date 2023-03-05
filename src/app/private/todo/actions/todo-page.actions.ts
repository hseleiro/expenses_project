import {createAction, props} from "@ngrx/store";
import {TodoProps} from "../../../shared/interfaces/todoProps";

export const enter = createAction('[Todo Page] Enter')

export const selectTodo = createAction(
  '[Todo Page] Select Todo',
  props<{ todoId: string}>()
)

export const clearSelectedTodo = createAction(
  '[Todo Page] Clear selected Todo'
)

export const createTodo = createAction(
  '[Todo Page] Create Todo',
  props<{ todo: TodoProps}>()
)

export const updateTodo = createAction(
  '[Todo Page] Update Todo',
  props<{ todoId: string, changes: TodoProps}>()
)

export const deleteTodo = createAction(
  '[Todo Page] Delete Todo',
  props<{ todoId: string}>()
)
