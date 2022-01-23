import * as actionTypes from "./constants";
import { getSubjectsRequest } from "api/request";
import { Dispatch } from "redux";
import { RequestExampleState } from "./reducer";

export const changeSubjectList = (data: RequestExampleState) => ({
  type: actionTypes.CHANGE_SUBJECTS,
  data,
});

export const getSubjectList = () => (dispatch: Dispatch) => {
  getSubjectsRequest<{ list: RequestExampleState }>()
    .then(({ data }) => {
      const action = changeSubjectList(data.list);
      dispatch(action);
    })
    .catch(() => {
      console.log("subjects 传输错误");
    });
};
