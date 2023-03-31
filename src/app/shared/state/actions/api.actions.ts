import {createAction, props} from "@ngrx/store";
import {Expense} from "../../models/expense";

export const getExpenses = createAction(
  '[Shared API] Get Expenses',
)

export const getExpensesSuccess = createAction(
  '[Shared API] Get Expenses Success',
  (expenses: ReadonlyArray<Expense>) => expenses
)

export const getExpensesFail = createAction(
  '[Shared API] Get Expenses Fail',
  props<{ message: string}>()
)
