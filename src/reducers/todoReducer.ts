import {
  FETCH_TODOS,
  TodoState,
  TodoActionTypes,
  TOGGLE_COMPLETED,
  DELETE_TODO
} from "../actions/types";

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
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}
