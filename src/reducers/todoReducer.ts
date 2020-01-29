import { FETCH_TODOS, TodoState, TodoActionTypes } from "../actions/types";

const initialState: TodoState = {
  todos: []
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: [...action.payload] };

    default:
      return state;
  }
}
