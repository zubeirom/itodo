export const FETCH_TODOS = "FETCH_TODOS";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  userId: number;
  id: number;
  title: String;
  completed: Boolean;
}

export interface TodoState {
  todos: Todo[];
}

interface FetchTodosAction {
  type: typeof FETCH_TODOS;
  payload: Todo[];
}

interface ToggleTodosAction {
  type: typeof TOGGLE_COMPLETED;
  id: number;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export type TodoActionTypes =
  | FetchTodosAction
  | ToggleTodosAction
  | DeleteTodoAction;
