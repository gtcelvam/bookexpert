import "./assests/css/App.css";
import Layout from "./components/layout";
import { Provider as ToolkitProvider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="App">
      <ToolkitProvider store={store}>
        <Layout />
      </ToolkitProvider>
    </div>
  );
}

export default App;
