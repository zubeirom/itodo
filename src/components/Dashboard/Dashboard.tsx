import React from "react";
import { Db } from "../../data/Db";
import Todo from "../Todo/Todo";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export interface DashboardProps {}

export interface DashboardState {
  todos: { userId: number; id: number; title: String; completed: boolean }[];
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  state: DashboardState = {
    todos: []
  };

  async componentDidMount() {
    const todos = await Db.getTodos();
    this.setState({
      todos
    });
  }

  render() {
    const listTodos = this.state.todos.map((todo, i) => (
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
        <GridList cols={3} spacing={2}>
          {listTodos}
        </GridList>
      </div>
    );
  }
}

export default Dashboard;
