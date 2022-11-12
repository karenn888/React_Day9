import { combineReducers } from "redux";
import postReducers from "./postReducers";
import productsReducer from "./productsReducer";
import todosReducer from "./todosReducer";

export const reducers = combineReducers({
    todos: todosReducer,
    products: productsReducer,
    posts: postReducers
})