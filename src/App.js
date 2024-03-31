import * as React from "react";
import Main from "./Components/Main";
import {Provider} from "react-redux"
import { store } from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
    <Main/>
    </Provider>
  );
}

export default App;
