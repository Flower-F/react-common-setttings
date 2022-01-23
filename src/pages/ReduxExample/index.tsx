import Counter from "components/Counter";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducer";
import { actions } from "./store";

const ReduxExample = () => {
  const { count } = useSelector((state: RootState) => ({
    count: state.reduxExample.count,
  }));

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const reset = () => {
    dispatch(actions.reset());
  };

  const incrementAsync = () => {
    dispatch(actions.incrementAsync());
  };

  return (
    <>
      <h1>ReduxExample</h1>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        incrementAsync={incrementAsync}
      />
    </>
  );
};

export default memo(ReduxExample);
