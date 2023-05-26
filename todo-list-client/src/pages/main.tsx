import { useState } from "react";
import { Spinner } from "../components/Spinner";
import { AppRoutes } from "./appRoutes";
import { ToastContainer } from "react-toastify";

const MainComponent = () => {
  const [isFetching, setIsFetching] = useState(false);

  if (isFetching) return <Spinner />;

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default MainComponent;
