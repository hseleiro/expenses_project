import {Action, createReducer, on} from "@ngrx/store";
import {ProfilePageActions} from "../../private/profile/actions";

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
}

export const profileReducer = createReducer(
  initialState,
  on(
    ProfilePageActions.enter,
    (state) => {
      return {
        ...state,
      }
    }),
)

export function reducer(state: undefined | State, action: Action) {
  return profileReducer(state, action)
}
