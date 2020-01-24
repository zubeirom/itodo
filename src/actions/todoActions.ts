import { FETCH_TODOS, TodoActionTypes } from "./types";

export const fetchTodos = (): TodoActionTypes => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(result => result.json())
    .then(todos => {
      return {
        type: FETCH_TODOS,
        payload: todos
      };
    });

  return { type: FETCH_TODOS, payload: [] };
};
