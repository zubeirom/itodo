import React, { useState, useEffect } from "react";
import { TodoState } from "../../actions/types";
import Todo from "../Todo/Todo";
import Search from "../Search/Search";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { fetchTodos } from "../../actions/todoActions";
import { connect } from "react-redux";

export interface DashboardState {
  todos: { userId: number; id: number; title: String; completed: boolean }[];
  input: String;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface DashboardProps {
  fetchTodos: () => Todo[];
}

const Dashboard: React.FC<DashboardProps> = DashboardProps => {
  const [todos, setTodos] = useState<Todo[]>();
  const { fetchTodos } = DashboardProps;

  useEffect(() => {
    setTodos(fetchTodos());
  });

  const listTodos = todos!.map((todo, i) => (
    <GridListTile key={i}>
      <Todo
        userId={todo.userId}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
      />
    </GridListTile>
  ));

  return (
    <div>
      <br />
      <br />
      <GridList cols={3} spacing={2}>
        {listTodos}
      </GridList>
    </div>
  );
};

Dashboard.propTypes = {
  fetchTodos: PropTypes.func.isRequired
};

export default connect<DashboardState, DashboardProps>(null, { fetchTodos })(
  Dashboard
);
