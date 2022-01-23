import { combineReducers } from "redux";
import { reducer as reduxExampleReducer } from "pages/ReduxExample/store/";
import { reducer as requestExampleReducer } from "pages/RequestExample/store";

export interface RootState {
  requestExample: requestExampleReducer.RequestExampleState;
  reduxExample: reduxExampleReducer.CounterState;
}

export default combineReducers({
  reduxExample: reduxExampleReducer.reduxExampleReducer,
  requestExample: requestExampleReducer.requestExampleReducer,
});
