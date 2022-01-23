import * as actionTypes from "./constants";
import { AnyAction } from "redux";
import produce from "immer";

export interface Subject {
  id: number;
  title: string;
}

export interface RequestExampleState {
  subjectList: Subject[];
}

const defaultState: RequestExampleState = {
  subjectList: [],
};

export const requestExampleReducer = produce(
  (state: RequestExampleState, action: AnyAction) => {
    switch (action.type) {
      case actionTypes.CHANGE_SUBJECTS:
        state.subjectList = action.data;
        break;
      default:
        break;
    }
  },
  defaultState
);
