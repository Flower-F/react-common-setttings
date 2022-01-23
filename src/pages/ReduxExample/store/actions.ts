import * as actionTypes from "./constants";
import { Dispatch } from "redux";

export const increment = () => ({ type: actionTypes.INCREMENT });

export const decrement = () => ({ type: actionTypes.DECREMENT });

export const reset = () => ({ type: actionTypes.RESET });

export const incrementAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch({
      type: actionTypes.INCREMENT_ASYNC,
    });
  }, 1000);
};
