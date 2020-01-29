import React, { useEffect, useState, useCallback } from "react";
import "./Dashboard.css";
import {
  TodoActionTypes,
  TOGGLE_COMPLETED,
  DELETE_TODO
} from "../../actions/types";
import Todo from "../Todo/Todo";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Dispatch } from "redux";
import Search from "../Search/Search";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = DashboardProps => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(result => result.json())
      .then(todos => {
        dispatch({ type: "FETCH_TODOS", payload: todos });
      });
  }, []);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const listTodos = filteredTodos.map((todo, i) => (
    <GridListTile key={i}>
      <Todo
        userId={todo.userId}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        onClick={() => dispatch({ type: TOGGLE_COMPLETED, id: todo.id })}
        onDelete={() => dispatch({ type: DELETE_TODO, id: todo.id })}
      />
    </GridListTile>
  ));

  let setSearchString = useCallback((value: string) => {}, []);

  return (
    <div>
      <br />
      <Search setSearchString={setSearchString} />
      <br />
      <GridList cols={3} spacing={2}>
        {listTodos}
      </GridList>
    </div>
  );
};

export default Dashboard;
