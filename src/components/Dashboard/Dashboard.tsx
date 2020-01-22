import React from "react";
import { Db } from "../../data/Db";
import Todo from "../Todo/Todo";
import Search from "../Search/Search";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export interface DashboardProps {}

export interface DashboardState {
  todos: { userId: number; id: number; title: String; completed: boolean }[];
  input: String;
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  state: DashboardState = {
    todos: [],
    input: ""
  };

  async componentDidMount() {
    const todos = await Db.getTodos();
    this.setState({
      todos,
      input: ""
    });
  }

  handleChange(event: any) {
    this.setState({
      todos: this.state.todos,
      input: event.target.value
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
        <br />
        <Search
          input={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <GridList cols={3} spacing={2}>
          {listTodos}
        </GridList>
      </div>
    );
  }
}

export default Dashboard;
