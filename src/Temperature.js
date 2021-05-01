import "./styles.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <span>11</span>
      <span class="unit">
        <a href="#" id="celsius-unit">
          °C
        </a>
        <a href="#" id="fahrenheit-unit">
          | °F
        </a>
      </span>
    </div>
  );
}
