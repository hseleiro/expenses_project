import {Action, createReducer, on} from "@ngrx/store";
import {WelcomePageActions} from "../../public/welcome/actions"
import {Expense} from "../models/expense";

export interface State {
  lastExpenseSaved: Expense[]
  message: String;
}

export const initialState: State = {
  lastExpenseSaved: [],
  message: 'Welcome',
}

export const welcomeReducer = createReducer(
  initialState,
  on(
    WelcomePageActions.enter,
    (state) => {
      return {
        ...state,
      }
    }),
  on(
    WelcomePageActions.saveExpense,
    (state) => {
      return {
        ...state,
        lastExpense: state.lastExpenseSaved
      }
    })
)

export function reducer(state: undefined | State, action: Action) {
  return welcomeReducer(state, action)
}
