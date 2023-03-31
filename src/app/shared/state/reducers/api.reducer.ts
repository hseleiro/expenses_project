import {Action, createReducer, on} from "@ngrx/store";
import {Expense} from "../../models/expense";

export interface State {
  expenses: Expense[]
}

export const initialState: State = {
  expenses: []
}

export const reducer = createReducer(
  initialState,
)
