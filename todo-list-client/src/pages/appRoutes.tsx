import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        {/* <Route path="/" element={<MoviesList />} />
        <Route path="/newTodoList" element={<MovieDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
