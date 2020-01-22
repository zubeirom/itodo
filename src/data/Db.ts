import axios from "axios";

export const Db: any = {
  async getTodos() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return result.data;
  }
};
