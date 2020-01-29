import React, { useEffect } from "react";
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
import { toggleCompleted } from "../../actions/todoActions";
import { TextField } from "@material-ui/core";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface DashboardState {
  todos: Todo[];
  input: String;
}
export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = DashboardProps => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(result => result.json())
      .then(todos => {
        dispatch({ type: "FETCH_TODOS", payload: todos });
      });
  }, []);

  const listTodos = todos.map((todo, i) => (
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

  const textStyle = {
    width: 600
  };

  return (
    <div>
      <br />
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className="textfield"
      />
      <br />
      <br />
      <GridList cols={3} spacing={2}>
        {listTodos}
      </GridList>
    </div>
  );
};

export default Dashboard;
