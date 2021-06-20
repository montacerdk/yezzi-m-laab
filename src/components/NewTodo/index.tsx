import React, { useRef, useContext } from "react";

import { TodosContext } from "../../store/todos-context";

import "./styles.scss";

const NewTodo: React.FC = (): JSX.Element => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todosContext = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    const entredText = todoTextInputRef.current!.value;
    if (!entredText.trim().length) {
      return;
    }
    todosContext.addTodo(entredText);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
