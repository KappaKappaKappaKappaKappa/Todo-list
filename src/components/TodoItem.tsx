import React from "react";
import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  index: number;
  toggleCompleteTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  toggleCompleteTodo,
  removeTodo,
}) => {
  return (
    <li
      className={`flex bg-[#2f2f32] border-[1px] rounded-full px-[20px] py-[10px] justify-between ${
        todo.completed ? "border-lime-500" : "border-[#fc0]"
      }`}
    >
      <p
        className={`text-white text-[20px] ${
          todo.completed ? "line-through decoration-red-500" : ""
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
};

export default TodoItem;
