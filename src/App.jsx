import logo from "./logo.svg";
import "./App.scss";
import { Topbar } from "./components/topbar/Topbar";
import { About } from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="appWrapper">
      <Topbar />
      {/* <img
        src={require(`./media/handBulb.jpg`)}
        alt=""
        srcset=""
        className="sliderImg"
      /> */}
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
