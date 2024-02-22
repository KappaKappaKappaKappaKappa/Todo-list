import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateInputValue,
  updateValueValid,
  addTodo,
  checkValueValid,
} from "../store/todoSlice";

export default function Form() {
  const dispatch = useDispatch();

  const valueValid = useSelector((state) => state.todos.valueValid);
  const inputValue = useSelector((state) => state.todos.inputValue);

  const addTask = () => {
    if (valueValid) {
      dispatch(addTodo({ inputValue }));
      dispatch(updateInputValue(""));
      dispatch(updateValueValid(undefined));
    } else {
      dispatch(updateValueValid(false));
    }
  };

  const changeInputValue = (e) => {
    dispatch(updateInputValue(e.target.value));
    dispatch(checkValueValid({ inputValue }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && valueValid) {
      dispatch(addTodo({ inputValue }));
      dispatch(updateInputValue(""));
      dispatch(updateValueValid(undefined));
    } else {
      dispatch(updateValueValid(false));
    }
  };

  return (
    <>
      <input
        className="text-[30px] text-white text-center rounded-full w-[80%] hover:cursor-text bg-[#2f2f32] outline-none focus:outline-[#fc0]"
        type="text"
        placeholder="Напишиите какую-нибудь задачу"
        onChange={(e) => changeInputValue(e)}
        value={inputValue}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <span
        className={` text-red-500 text-[14px] leading-[20px] my-[5px] ${
          valueValid === false ? "visible" : "invisible"
        }`}
      >
        Длинна задачи должна быть больше 2 символов
      </span>
      <button
        onClick={addTask}
        className="text-[15px] p-[10px] bg-[#fc0] w-[20%] rounded-full text-black hover:opacity-80 mb-[30px]"
      >
        Создать задачу
      </button>
    </>
  );
}
