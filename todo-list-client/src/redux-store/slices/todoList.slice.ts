import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoListSliceState {}

const initialState: TodoListSliceState = {};

const TodoListSlice = createSlice({
  name: "TodoListSlice",
  initialState,
  reducers: {},
});

export const todoListActions = TodoListSlice.actions;
export const todoListReducer = TodoListSlice.reducer;
