import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllTodosList from "./all-todos/allTodosList";
import AddTodoItem from "./add-todo/addTodo";
import { useEffect } from "react";
import { useTodoListMananger } from "../hooks/todoList.hooks";

const useInitStuff = () => {
  const { initAllTodosList } = useTodoListMananger();
  useEffect(() => {
    initAllTodosList();
  });
};

export const AppRoutes: React.FC<{}> = () => {
  useInitStuff();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<AllTodosList />} />
        <Route path="/add-todo" element={<AddTodoItem />} />
        <Route path="/add-todo/:id" element={<AddTodoItem />} />
      </Routes>
    </BrowserRouter>
  );
};
