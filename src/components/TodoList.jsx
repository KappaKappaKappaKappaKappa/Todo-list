import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo, toggleCompleteTodo }) {
  return (
    <ul className="w-[60%] min-h-[70vh] rounded-[30px] bg-[#2f2f32] p-[10px] flex flex-col gap-[10px] mb-[30px]">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            removeTodo={removeTodo}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        );
      })}
    </ul>
  );
}
