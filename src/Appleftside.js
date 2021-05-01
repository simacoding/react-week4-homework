import "./styles.css";

import City from "./City";
import Update from "./Update";
import Weatherinfo from "./Weatherinfo";

export default function Appleftside() {
  return (
    <div className="Appleftside">
      <City />
      <Update />
      <Weatherinfo />
    </div>
  );
}
