import {createStore} from "redux";
import ToDoReducer from "./reducers/ToDoReducer";

let store = createStore(ToDoReducer);

export default store;