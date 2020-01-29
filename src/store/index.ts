import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Todo } from "../actions/types";

interface IInitialState {
  todos: Todo[];
}

const initialState: IInitialState = {
  todos: []
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState as any,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
