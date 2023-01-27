const elCards = document.querySelector("#cards");
const elTemplate = document.querySelector("#template");
const errorMassage = document.querySelector("#errorText");

const elInput = document.querySelector("#inp");
const names = document.querySelector("#name");
const capital = document.querySelector("#capital");
const population = document.querySelector("#population");
const flag = document.querySelector("#flag");
const weather = document.querySelector("#weather");
const region = document.querySelector("#region");

elInput.addEventListener("change", (evt) => {
  const value = evt.target.value;

  function state() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=46351da790226c653537b9628dc20463`
    )
      .then((res) => res.json())
      .then((data) => {
        weather.textContent = data.main.feels_like;
        console.log(data);
      });
    fetch(`
    https://restcountries.com/v3.1/name/${value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        names.textContent = data[0].name.common;
        capital.textContent = "Capital: " + data[0].capital;
        population.textContent = "Population: " + data[0].population;
        flag.textContent = "Flag: " + data[0].flag;
        region.textContent = "Region" + data[0].subregion;
      })
      .catch((err) => {
        errorMassage.textContent = "Ma'lumot topilmadi!";
        capital.textContent = "";
        flag.textContent = "";
        population.textContent = "";
        names.textContent = "";
        region.textContent = "";
        weather.textContent = "";
      });
  }
  state();
});
