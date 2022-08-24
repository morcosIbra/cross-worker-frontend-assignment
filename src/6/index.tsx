import { useState } from "react";
import { todoInitialData } from "./todosInitialStore";

import CreateTodo from "./components/CreateTodo/CreateTodo";
import SearchTodos from "./components/SearchTodos/SearchTodos";
import TodoList from "./components/TodoList/TodoList";

import "./index.scss";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */
export interface Todo { 
  id: string; completed: boolean; label: string; 
};

const Task6 = () => {
  const [searchQuery, setSearchQuery] = useState<Todo["label"]>("");
  const [todoValue, setTodoValue] = useState<Todo["label"]>("");
  const [todoList, setTodoList] = useState<Todo[]>(todoInitialData);

  const onSubmitTodo = (): void => {
    if (todoValue) {
      setTodoList((prevList) => {
        const id = `${todoValue.replace(/ /g, "")}${prevList.length}`;
        const todo = {
          id,
          label: todoValue,
          completed: false,
        };
        setTodoValue("");
        return [todo, ...prevList];
      });
    }
  };

  const toggleTodoStatus = (id: Todo["id"]) => {
    setTodoList((prevList) => {
      const mappedList = prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      );
      return mappedList;
    });
  };

  const removeTodo = (id: Todo["id"]) => {
    setTodoList((prevList) => {
      const mappedList = prevList.filter((todo) => todo.id !== id);
      return mappedList;
    });
  };

  const filteredTodoList = todoList.filter((todo) =>
      todo.label.includes(searchQuery)
    );
  return (
    <div id="task-6">
      <CreateTodo
        todoValue={todoValue}
        onSubmitTodo={onSubmitTodo}
        onChangeTodo={setTodoValue}
      />
      <div className="todos-layout">
        <h2>Todos List</h2>
        <SearchTodos
          searchQuery={searchQuery}
          onChangeSearchQuery={setSearchQuery}
        />
        <TodoList
          todoList={filteredTodoList}
          toggleTodoStatus={toggleTodoStatus}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};

export default Task6;
