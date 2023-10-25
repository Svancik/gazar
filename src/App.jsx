import logo from "./logo.svg";
import "./App.scss";
import { Topbar } from "./components/topbar/Topbar";
import { About } from "./components/about/About";

function App() {
  return (
    <div className="appWrapper">
      <Topbar />
      <About />
    </div>
  );
}

export default App;
