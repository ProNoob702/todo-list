import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoListItem } from "../../models/todoList";

interface TodoListSliceState {
  todolists: TodoListItem[];
}

const initialState: TodoListSliceState = {
  todolists: [],
};

const TodoListSlice = createSlice({
  name: "TodoListSlice",
  initialState,
  reducers: {
    setList(state, action: PayloadAction<TodoListItem[]>) {
      state.todolists = action.payload;
    },
    addNewItem(state, action: PayloadAction<TodoListItem>) {
      state.todolists.push(action.payload);
    },
    updateTodoListItem(state, action: PayloadAction<{ id: string; newData: TodoListItem }>) {
      const itemIndex = state.todolists.findIndex((x) => x.id === action.payload.id);
      state.todolists[itemIndex] = { ...action.payload.newData };
    },
    removeTodoListItem(state, action: PayloadAction<string>) {
      const itemIndex = state.todolists.findIndex((x) => x.id === action.payload);
      state.todolists.splice(itemIndex, 1);
    },
  },
});

export const todoListActions = TodoListSlice.actions;
export const todoListReducer = TodoListSlice.reducer;
