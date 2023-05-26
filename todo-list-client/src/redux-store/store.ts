import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { todoListActions, todoListReducer } from "./slices/todoList.slice";

export const rootReducer = combineReducers({
  moviesState: todoListReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type IAppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
export const appActions = { ...todoListActions };

export default store;
