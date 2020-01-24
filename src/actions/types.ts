export const FETCH_TODOS = "FETCH_TODOS";

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

export type TodoActionTypes = FetchTodosAction;
