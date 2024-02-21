import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [valueValid, isValueValid] = useState(undefined);

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    checkValueValid(inputValue);
  };

  const addTodo = () => {
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
    } else {
      isValueValid(false);
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((item) => id !== item.id);
    setTodos(updatedTodos);
  };

  const toggleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(inputValue);
    }
  };

  const checkValueValid = () => {
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
}

export default App;
