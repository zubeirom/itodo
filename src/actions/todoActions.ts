import { FETCH_TODOS, TOGGLE_COMPLETED, TodoActionTypes, Todo } from "./types";

export const fetchTodos = (): TodoActionTypes => {
  return { type: FETCH_TODOS, payload: [] };
};

export const toggleCompleted = (id: number): TodoActionTypes => {
  return { type: TOGGLE_COMPLETED, id };
};
