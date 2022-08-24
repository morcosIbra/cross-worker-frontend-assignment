import { FunctionComponent } from "react";
import Todo from "../Todo/Todo";

import { Todo as TodoInterface } from "../../";

import "./todoList.scss";

interface TodoListProps {
  todoList: TodoInterface[];
  toggleTodoStatus: (id: TodoInterface['id']) => void;
  removeTodo: (id: TodoInterface['id']) => void;
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
