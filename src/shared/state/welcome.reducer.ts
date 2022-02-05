import {Action, createReducer, on} from "@ngrx/store";
import { WelcomePageActions } from "../../app/public/welcome/actions"

export interface State {
  message: String;
}

export const initialState: State = {
  message: 'Welcome'
}

export const welcomeReducer = createReducer(
  initialState,
  on(
    WelcomePageActions.enter,
    (state) => {
      return {
        ...state,
      }
    })
)

export function reducer(state: undefined | State, action: Action) {
  return welcomeReducer(state, action)
}
