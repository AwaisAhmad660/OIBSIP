import React, { useState, useRef } from "react";

const celsiusToFahrenheit = (degree) => parseFloat(degree) * 1.8 + 32;
const fahrenheitToCelsius = (degree) => (parseFloat(degree) - 32) / 1.8;
const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export default function App() {
  const [degree, setDegree] = useState("");
  const [conversion, setConversion] = useState("toF");
  const inputRef = useRef(null);

  const resutHandler = () => {
    setDegree("");
    inputRef.current.focus();
  };
  return (
    <div className="whole">
      <div className="mainContainer">
        <div>
          <h1 className="title">Temperature Converter</h1>
        </div>
        <div className="tempInput">
          <p>
            <label htmlFor="temperature ">Temperature:</label>
            &nbsp;
          </p>

          <input
            className="inputType"
            id="temperature"
            autoFocus
            ref={inputRef}
            type="number"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          {/* <hr /> */}
        </div>
        <br />
        <div>
          <input
            id="toF"
            type="radio"
            value="toF"
            name="degrees"
            checked={conversion === "toF"}
            onChange={(e) => setConversion(e.target.value)}
          />
          <label htmlFor="toF">Celsius to Fahrenheit</label>
        </div>
        <div className="radioBtn">
          <input
            id="toC"
            type="radio"
            value="toC"
            name="degrees"
            checked={conversion === "toC"}
            onChange={(e) => setConversion(e.target.value)}
          />
          <label htmlFor="toC">Fahrenheit to Celsius</label>
        </div>
        <br />
        <p className="font-bold">Result:</p>
        {degree !== "" && (
          <div data-testid="result">
            {/* {degree} */}
            {/* {conversion === "toF" ? "ºC" : "ºF"} equals to */}
            <div className="result">
              {conversion === "toF"
                ? round(celsiusToFahrenheit(degree))
                : round(fahrenheitToCelsius(degree))}
              {conversion === "toF" ? "ºF" : "ºC"}
            </div>

            <div>
              <br />
              <button className=" btn " onClick={resutHandler}>
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
