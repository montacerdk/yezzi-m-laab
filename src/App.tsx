import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Montacer Dkhilali"),
    new Todo("Yezzik m Laab"),
  ]);

  const addTodoHandler = (text: string): void => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
