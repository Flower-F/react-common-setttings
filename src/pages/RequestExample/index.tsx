import SubjectList from "components/SubjectList";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducer";
import { actions } from "./store";

const RequestExample = () => {
  const { list } = useSelector((state: RootState) => ({
    list: state.requestExample.subjectList,
  }));

  const dispatch = useDispatch();

  const getSubjectList = () => {
    dispatch(actions.getSubjectList());
  };

  useEffect(() => {
    if (!list.length) {
      getSubjectList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>RequestExample</h1>
      <SubjectList list={list} />
    </>
  );
};

export default memo(RequestExample);
