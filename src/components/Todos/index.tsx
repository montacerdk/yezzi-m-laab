import Todo from "../../models/Todo";

const Todos: React.FC<{ items: Todo[] }> = (props): JSX.Element => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
