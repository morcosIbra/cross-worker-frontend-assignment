import { FunctionComponent, MouseEventHandler } from "react";
import { Todo as TodoInterface } from "../..";

import "./todo.scss";

interface TodoProps {
  todo: TodoInterface;
  toggleTodoStatus: (id: string) => void;
  removeTodo: (id: string) => void;
}

const Todo: FunctionComponent<TodoProps> = ({
  todo,
  toggleTodoStatus,
  removeTodo,
}) => {
  const handleTodoClick: MouseEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
    toggleTodoStatus(todo.id);
  };
  const handleRemoveClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    removeTodo(todo.id);
  };
  return (
    <li
      className={`todo ${todo.completed ? "completed" : ""}`}
      onClick={handleTodoClick}
    >
      {todo.label}
      {!todo.completed && (
        <button className="button-danger" onClick={handleRemoveClick}>
          Remove
        </button>
      )}
    </li>
  );
};

export default Todo;
