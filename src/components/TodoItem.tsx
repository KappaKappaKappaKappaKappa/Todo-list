import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleteTodo } from "../store/todoSlice";
import type { Todo } from "../store/todoSlice";

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const dispatch = useDispatch();
  return (
    <li
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
          onClick={() => dispatch(toggleCompleteTodo({ id: todo.id }))}
          className="px-[10px] text-white border-[1px] border-lime-500 rounded-full hover:opacity-80"
        >
          &#x2713; Изменить статус
        </button>
        <button
          onClick={() => dispatch(removeTodo({ id: todo.id }))}
          className="text-white border-[1px] border-rose-700 rounded-full px-[10px] hover:opacity-80"
        >
          &#x2715; Удалить
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
