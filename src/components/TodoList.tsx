import React from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => void;
  toggleCompleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  removeTodo,
  toggleCompleteTodo,
}) => {
  return (
    <ul className="w-[60%] min-h-[70vh] rounded-[30px] bg-[#2f2f32] p-[10px] flex flex-col gap-[10px] mb-[30px]">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            removeTodo={removeTodo}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
