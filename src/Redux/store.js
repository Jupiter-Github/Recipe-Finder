import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { RecipeReducer } from "./RecipeReducer";

const store = createStore(RecipeReducer, applyMiddleware(thunk));
export { store };
