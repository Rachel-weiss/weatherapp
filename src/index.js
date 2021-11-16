function everyDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = date.getDay();
  let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let sameday = daynames[day];

  return `${sameday}, ${hours}:${minutes}`;
}

let newdate = document.querySelector("#currentdate");
let randomDate = new Date();
newdate.innerHTML = everyDate(randomDate);

//search tool
function typecit(typeCity) {
  let apiKey = "3c8fe7d0eb508134375e028bdcd44c01";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${typeCity}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(something);
}

function citySearch(event) {
  event.preventDefault();
  let typeCity = document.querySelector("#typecity").value;
  typecit(typeCity);
}

let searchCity = document.querySelector("#cityinput");
searchCity.addEventListener("submit", citySearch);

//repsonse tool
function something(response) {
  let city = document.querySelector("#temp");
  let citytemp = Math.round(response.data.main.temp);
  city.innerHTML = `${citytemp}°C`;
  let currentweatherex = document.querySelector("#imageexplanation");
  currentweatherex.innerHTML = response.data.weather[0].description;
  let currentwind = document.querySelector("#wind");
  currentwind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  let currenthum = document.querySelector("#humidity");
  currenthum.innerHTML = `Humidity: ${Math.round(
    response.data.main.humidity
  )} %`;
  let icon = document.querySelector("#wob_tci");
  icon.innerHTML = response.data.weather[0].icon;
  let currentcity = document.querySelector("#city");
  currentcity.addEventListener("current", currentPosition);
  currentcity.innerHTML = response.data.name;
}

function currentPosition(position) {
  let apiKey = "3c8fe7d0eb508134375e028bdcd44c01";
  let currentposition = position.coords.latitude;
  let currentpositionlong = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentposition}&lon=${currentpositionlong}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(something);
}

navigator.geolocation.getCurrentPosition(currentPosition);

//current date and date replacement - done
//search and current - done
//things to change in current code
//temp id for temperature
//imageexplanation explanation for emoji
//add id to prec, wind,humidity for real data (search for weather openwheather api)
//take out fahrenheit
//add button for current position and search for current location (navigator..)
//wob_tci id fr emoji to change accoridng to the description
