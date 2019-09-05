import rootReduser from "./rootReduser";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Store = createStore(
    rootReduser,
    applyMiddleware(thunk)
);

export default Store