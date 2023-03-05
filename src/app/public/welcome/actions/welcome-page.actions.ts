import {createAction, props} from "@ngrx/store";
import {Expense} from "../../../shared/models/expense";

export const enter = createAction('[Welcome Page] Enter');

export const saveExpense = createAction(
  '[Welcome Page] Save Expense',
  props<{ expense: Expense }>()
)
