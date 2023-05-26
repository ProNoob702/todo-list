import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllTodosList from "./all-todos/allTodosList";
import AddTodoItem from "./add-todo/addTodo";

export const AppRoutes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<AllTodosList />} />
        <Route path="/add-todo" element={<AddTodoItem />} />
      </Routes>
    </BrowserRouter>
  );
};
