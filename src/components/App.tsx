import TodosContextProvider from "../store/todos-context";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const App: React.FC = (): JSX.Element => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
