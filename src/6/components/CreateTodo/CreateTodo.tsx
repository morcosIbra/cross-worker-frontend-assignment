import React, { ChangeEventHandler, FormEventHandler, FunctionComponent, MouseEventHandler } from "react";

import "./createTodos.scss";

interface CreateTodoProps {
  todoValue: string;
  onSubmitTodo: () => void;
  onChangeTodo: (todo: any) => void;
}

const CreateTodo: FunctionComponent<CreateTodoProps> = ({
  todoValue,
  onSubmitTodo,
  onChangeTodo,
}) => {
  const onChangeTodoHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeTodo(e.target.value);
  };

  const onSubmitHandle: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmitTodo();
  };
  return (
    <form onSubmit={onSubmitHandle} className="create-todo-form">
      <input
        value={todoValue}
        type="text"
        onChange={onChangeTodoHandle}
        placeholder="add new todo"
      />
      <button className="button-basic" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CreateTodo;
