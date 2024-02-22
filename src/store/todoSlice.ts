import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

export interface TodoState {
  todos: Todo[];
  valueValid: boolean | undefined;
  inputValue: string;
}

const initialState: TodoState = {
  todos: [],
  valueValid: undefined,
  inputValue: "",
};

const todoSlice = createSlice({
  name: "todos",

  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<{ inputValue: string }>) {
      state.todos.push({
        id: new Date().getTime().toString(),
        text: action.payload.inputValue,
        complete: false,
      });
    },

    removeTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    toggleCompleteTodo(state, action: PayloadAction<{ id: string }>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) {
        toggledTodo.complete = !toggledTodo.complete;
      }
    },

    checkValueValid(state, action: PayloadAction<{ inputValue: string }>) {
      if (action.payload.inputValue.length >= 2) {
        state.valueValid = true;
      } else {
        state.valueValid = false;
      }
    },

    updateValueValid(state, action: PayloadAction<undefined | boolean>) {
      state.valueValid = action.payload;
    },

    updateInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleCompleteTodo,
  checkValueValid,
  updateValueValid,
  updateInputValue,
} = todoSlice.actions;

export default todoSlice.reducer;
