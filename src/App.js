import "./App.css";
import { FcHome } from "react-icons/fc";
import Form from "./components/Form";

function App() {
  return (
    <div
      className="App container"
      style={{ maxWidth: 500, margin: "1rem auto" }}
    >
      <h1 className="display-5 my-5">
        <FcHome /> Mortgage / Bond Calculator{" "}
      </h1>
      <Form />
    </div>
  );
}

export default App;