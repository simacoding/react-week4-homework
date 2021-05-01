import "./styles.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <span>11</span>
      <span class="unit">
        <a href="https://de.wikipedia.org/wiki/Grad_Celsius" id="celsius-unit">
          °C
        </a>
        <a
          href="https://de.wikipedia.org/wiki/Grad_Fahrenheit"
          id="fahrenheit-unit"
        >
          | °F
        </a>
      </span>
    </div>
  );
}
