let celsius_Input = document.querySelector("#celsius > input");
let fahrenheit_Input = document.querySelector("#fahrenheit > input");
let kelvin_Input = document.querySelector("#kelvin > input");
let btn = document.querySelector(".btn button");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

/* Celcius to Fahrenheit and Kelvin */
celsius_Input.addEventListener("input", function () {
  let cTemp = parseFloat(celsius_Input.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273.15;

  //   fahrenheitInput.value = roundNumber(fTemp);
  fahrenheit_Input.value = fTemp;
  //   kelvinInput.value = roundNumber(kTemp);
  kelvin_Input.value = kTemp;
});

/* Fahrenheit to Celcius and Kelvin */
fahrenheit_Input.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheit_Input.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

  celsius_Input.value = roundNumber(cTemp);
  kelvin_Input.value = roundNumber(kTemp);
});

// /* Kelvin to Celcius and Fahrenheit */
kelvin_Input.addEventListener("input", function () {
  let kTemp = parseFloat(kelvin_Input.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

  celsius_Input.value = roundNumber(cTemp);
  fahrenheit_Input.value = roundNumber(fTemp);
});

btn.addEventListener("click", () => {
  celsius_Input.value = "";
  fahrenheit_Input.value = "";
  kelvin_Input.value = "";
});
