import { Provider } from "react-redux";
import MyRouter from "routes";
import store from "store";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <MyRouter />
    </Provider>
  );
}

export default App;
