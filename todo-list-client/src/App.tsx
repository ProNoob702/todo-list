import store from "./redux-store/store";
import { Provider } from "react-redux";
import { AppLayout } from "./layout/Layout";
import MainComponent from "./pages/main";

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout>
        <MainComponent />
      </AppLayout>
    </Provider>
  );
};

export default App;
