import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime().toString(),
        text: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
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
      addTodo();
    }
  };

  return (
    <main className="w-full flex flex-col pt-[40px] items-center">
      <input
        className="text-[30px] text-white text-center rounded-full w-[80%] mb-[20px] hover:cursor-text bg-[#2f2f32] outline-none focus:outline-[#fc0]"
        type="text"
        placeholder="Напишиите какую-нибудь задачу"
        onChange={changeInputValue}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={addTodo}
        className="text-[15px] p-[10px] bg-[#fc0] w-[20%] rounded-full text-black hover:opacity-80 mb-[20px]"
      >
        Создать задачу
      </button>

      <ul className="w-[60%] min-h-[70vh] rounded-[30px] bg-[#2f2f32] p-[10px] flex flex-col gap-[10px] mb-[30px]">
        {todos.map((todo, index) => {
          return (
            <li
              key={todo.id}
              className={`flex bg-[#2f2f32] border-[1px] rounded-full px-[20px] py-[10px] justify-between ${
                todo.complete ? "border-lime-500" : "border-[#fc0]"
              }`}
            >
              <p
                className={`text-white text-[20px] ${
                  todo.complete ? "line-through decoration-red-500" : ""
                }`}
              >
                {`${index + 1}. ${todo.text}`}
              </p>
              <div className="flex gap-[10px]">
                <button
                  onClick={() => toggleCompleteTodo(todo.id)}
                  className="px-[10px] text-white border-[1px] border-lime-500 rounded-full hover:opacity-80"
                >
                  &#x2713; Изменить статус
                </button>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-white border-[1px] border-rose-700 rounded-full px-[10px] hover:opacity-80"
                >
                  &#x2715; Удалить
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
