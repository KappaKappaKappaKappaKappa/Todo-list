import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className="w-[60%] min-h-[70vh] rounded-[30px] bg-[#2f2f32] p-[10px] flex flex-col gap-[10px] mb-[30px]">
      {todos.map((todo, index) => {
        return <TodoItem key={todo.id} todo={todo} index={index} />;
      })}
    </ul>
  );
}
