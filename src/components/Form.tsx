import React from "react";
import { ChangeEvent, KeyboardEvent } from "react";

interface FormProps {
  changeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  valueValid: boolean | undefined;
  addTodo: () => void;
}

const Form: React.FC<FormProps> = ({
  changeInputValue,
  inputValue,
  handleKeyDown,
  valueValid,
  addTodo,
}) => {
  return (
    <>
      <input
        className="text-[30px] text-white text-center rounded-full w-[80%] hover:cursor-text bg-[#2f2f32] outline-none focus:outline-[#fc0]"
        type="text"
        placeholder="Напишиите какую-нибудь задачу"
        onChange={changeInputValue}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />
      <span
        className={` text-red-500 text-[14px] leading-[20px] my-[5px] ${
          valueValid === false ? "visible" : "invisible"
        }`}
      >
        Длинна задачи должна быть больше 2 символов
      </span>
      <button
        onClick={addTodo}
        className="text-[15px] p-[10px] bg-[#fc0] w-[20%] rounded-full text-black hover:opacity-80 mb-[30px]"
      >
        Создать задачу
      </button>
    </>
  );
};

export default Form;
