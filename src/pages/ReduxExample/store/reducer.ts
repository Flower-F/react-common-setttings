import * as actionTypes from "./constants";
import { AnyAction } from "redux";
import { produce } from "immer";

export interface CounterState {
  count: number;
}

const defaultState: CounterState = {
  count: 0,
};

export const reduxExampleReducer = produce(
  (state: CounterState, action: AnyAction) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
      case actionTypes.INCREMENT_ASYNC:
        state.count = state.count + 1;
        break;
      case actionTypes.DECREMENT:
        state.count = state.count - 1;
        break;
      case actionTypes.RESET:
        state.count = 0;
        break;
      default:
        break;
    }
  },
  defaultState
);
