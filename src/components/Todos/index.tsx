import { useContext } from "react";

import { TodosContext } from "../../store/todos-context";
import TodoItem from "../TodoItem";

import "./styles.scss";

const Todos: React.FC = (): JSX.Element => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className="todos">
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
