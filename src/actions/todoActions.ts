import { FETCH_TODOS, TodoActionTypes } from "./types";

export const fetchTodos = (): TodoActionTypes => {
  return { type: FETCH_TODOS, payload: [] };
};
