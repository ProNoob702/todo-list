import store from "./redux-store/store";
import { Provider } from "react-redux";
import { AppRoutes } from "./pages/appRoutes";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoutes />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
