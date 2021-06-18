import Todo from "../../models/Todo";
import TodoItem from "../TodoItem";

import "./styles.scss";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
): JSX.Element => {
  return (
    <ul className="todos">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
