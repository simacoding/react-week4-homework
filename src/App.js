import "./styles.css";

import Search from "./Search";
import Appleftside from "./Appleftside";
import Apprightside from "./Apprightside";

export default function App() {
  return (
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
  );
}
