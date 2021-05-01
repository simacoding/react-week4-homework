import "./styles.css";

import Search from "./Search";
import Appleftside from "./Appleftside";
import Apprightside from "./Apprightside";

export default function App() {
  return (
    <div>
      <div className="App">
        <Search />
        <div className="row">
          <div className="col-8">
            <Appleftside />
          </div>
          <div className="col-4">
            <Apprightside />
          </div>
        </div>
      </div>
      <p className="Underline">
        <a href="https://github.com/simacoding/react-week4-homework">
          Open-source code
        </a>{" "}
        by Simone Manczyk
      </p>
    </div>
  );
}
