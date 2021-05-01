import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Enter your city" id="entercity" />
        &nbsp;
        <input type="submit" value="Search" id="searchbutton" />
        &nbsp;
        <button id="currentlocation">🧭</button>
      </form>
      <br />
    </div>
  );
}
