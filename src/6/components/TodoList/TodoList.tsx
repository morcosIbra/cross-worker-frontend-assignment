import { FunctionComponent } from "react";
import { Todo as TodoInterface } from "../../";
import Todo from "../Todo/Todo";

import "./todoList.scss";

interface TodoListProps {
  todoList: TodoInterface[];
  toggleTodoStatus: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: FunctionComponent<TodoListProps> = ({
  todoList,
  toggleTodoStatus,
  removeTodo,
}) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
