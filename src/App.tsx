import { useState, ChangeEvent, KeyboardEvent } from "react";
import React from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [valueValid, isValueValid] = useState<undefined | boolean>(undefined);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    checkValueValid();
  };

  const addTodo = (): void => {
    if (valueValid) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime().toString(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
      isValueValid(undefined);
    } else {
      isValueValid(false);
    }
  };

  const removeTodo = (id: string): void => {
    const updatedTodos = todos.filter((item) => id !== item.id);
    setTodos(updatedTodos);
  };

  const toggleCompleteTodo = (id: string): void => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const checkValueValid = (): void => {
    if (inputValue.length >= 2) {
      isValueValid(true);
    } else {
      isValueValid(false);
    }
  };

  return (
    <main className="w-full flex flex-col pt-[40px] items-center">
      <Form
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        handleKeyDown={handleKeyDown}
        valueValid={valueValid}
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
    </main>
  );
};

export default App;
