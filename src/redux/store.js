import { createStore } from "redux";
import reducerUsInfo from "./reducers/reducers";

const store = createStore(reducerUsInfo);

export default store;
