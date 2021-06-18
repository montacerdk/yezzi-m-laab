import React, { useRef } from "react";

import "./styles.scss";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (
  props
): JSX.Element => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    const entredText = todoTextInputRef.current!.value;
    if (!entredText.trim().length) {
      return;
    }
    props.onAddTodo(entredText);
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
