import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    valueValid: undefined,
    inputValue: "",
  },

  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().getTime().toString(),
        text: action.payload.inputValue,
        complete: false,
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    toggleCompleteTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.complete = !toggledTodo.complete;
    },

    checkValueValid(state, action) {
      if (action.payload.inputValue.length >= 2) {
        state.valueValid = true;
      } else {
        state.valueValid = false;
      }
    },

    updateValueValid(state, action) {
      state.valueValid = action.payload;
    },

    updateInputValue(state, action) {
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
