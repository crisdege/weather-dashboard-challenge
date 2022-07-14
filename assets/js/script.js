var citySearchEl = document.querySelector("#city-search");
var cityNameEl = document.querySelector("#city-name");
var cityName = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var uv = document.querySelector("#uv");
var currentDate = moment().format("M/D/YYYY");
var weathericonone = document.querySelector("#iconone");

var getLocationCoordinates = function (name) {
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    name +
    "&appid=f675d7e4c5368e20a20492b4a37fbb0c";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      // console.log(data);
      displayWeather(data[0].lat, data[0].lon);
      displayForecast(data[0].lat, data[0].lon);
      var city = data[0].name;
      cityName.innerHTML = city + " (" + currentDate + ") ";
    });
  });
};

var displayWeather = function (lat, lon) {
  // console.log(lat);
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=f675d7e4c5368e20a20492b4a37fbb0c";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      var currtemp = data.current.temp;
      var currentwind = data.current.wind_speed;
      var currenthumidity = data.current.humidity;
      var currentuv = data.current.uvi;
      temp.innerHTML = "Temp: " + currtemp + "°F";
      wind.innerHTML = "Wind: " + currentwind + " MPH";
      humidity.innerHTML = "Humidity: " + currenthumidity + "%";
      uv.innerHTML = "UV Index: " + currentuv;

      var iconimg = data.current.weather[0].icon;
      console.log(iconimg);
      weathericon = "http://openweathermap.org/img/wn/" + iconimg + "@2x.png";
    });
  });

  // console.log(citySearch);
};

var displayForecast = function (lat, lon) {
  // console.log(lat);
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=f675d7e4c5368e20a20492b4a37fbb0c";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      //day one forecast

      var dayonedate = moment().add(1, "days").format("M/D/YYYY");
      var forecasttempone = data.daily[0].temp.max;
      var forecastwindone = data.daily[0].wind_speed;
      var forecasthumidityone = data.daily[0].humidity;

      // var iconimgone = data.daily[0].weather[0].icon;
      // const imgone = document.createElement("imgone");
      // imgone.src = "http://openweathermap.org/img/wn/" + iconimgone + "@2x.png";

      dayone.innerHTML = dayonedate;
      // weathericonone.innerHTML = document.body.appendChild(imgone);
      tempone.innerHTML = "Temp: " + forecasttempone + "°F";
      windone.innerHTML = "Wind: " + forecastwindone + " MPH";
      humidityone.innerHTML = "Humidity: " + forecasthumidityone + "%";

      //day two forecast
      var daytwodate = moment().add(2, "days").format("M/D/YYYY");
      var forecasttemptwo = data.daily[1].temp.max;
      var forecastwindtwo = data.daily[1].wind_speed;
      var forecasthumiditytwo = data.daily[1].humidity;

      // var iconimgtwo = data.daily[1].weather[1].icon;
      // const imgtwo = document.createElement("imgtwo");
      // imgtwo.src = "http://openweathermap.org/img/wn/" + iconimgtwo + "@2x.png";

      daytwo.innerHTML = daytwodate;
      // weathericonone.innerHTML = document.body.appendChild(imgtwo);
      temptwo.innerHTML = "Temp: " + forecasttemptwo + "°F";
      windtwo.innerHTML = "Wind: " + forecastwindtwo + " MPH";
      humiditytwo.innerHTML = "Humidity: " + forecasthumiditytwo + "%";

      //day three forecast
      var daythreedate = moment().add(3, "days").format("M/D/YYYY");
      var forecasttempthree = data.daily[2].temp.max;
      var forecastwindthree = data.daily[2].wind_speed;
      var forecasthumiditythree = data.daily[2].humidity;

      daythree.innerHTML = daythreedate;
      tempthree.innerHTML = "Temp: " + forecasttempthree + "°F";
      windthree.innerHTML = "Wind: " + forecastwindthree + " MPH";
      humiditythree.innerHTML = "Humidity: " + forecasthumiditythree + "%";

      //day four forecast
      var dayfourdate = moment().add(4, "days").format("M/D/YYYY");
      var forecasttempfour = data.daily[3].temp.max;
      var forecastwindfour = data.daily[3].wind_speed;
      var forecasthumidityfour = data.daily[3].humidity;

      dayfour.innerHTML = dayfourdate;
      tempfour.innerHTML = "Temp: " + forecasttempfour + "°F";
      windfour.innerHTML = "Wind: " + forecastwindfour + " MPH";
      humidityfour.innerHTML = "Humidity: " + forecasthumidityfour + "%";

      //day five forecast
      var dayfivedate = moment().add(5, "days").format("M/D/YYYY");
      var forecasttempfive = data.daily[4].temp.max;
      var forecastwindfive = data.daily[4].wind_speed;
      var forecasthumidityfive = data.daily[4].humidity;

      dayfive.innerHTML = dayfivedate;
      tempfive.innerHTML = "Temp: " + forecasttempfive + "°F";
      windfive.innerHTML = "Wind: " + forecastwindfive + " MPH";
      humidityfive.innerHTML = "Humidity: " + forecasthumidityfive + "%";
    });
  });
};

// var setIcon = function (lat, lon) {
//   var apiUrl =
//     "https://api.openweathermap.org/data/2.5/onecall?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&units=imperial&appid=f675d7e4c5368e20a20492b4a37fbb0c";
//   fetch(apiUrl).then(function (response) {
//     response.json().then(function (data) {
//       // console.log(data);
//       var iconimg = data.current.weather[0].icon;
//       console.log(iconimg);
//       weathericon = "http://openweathermap.org/img/wn/" + iconimg + "@2x.png";
//     });
//   });
// };

// setIcon();

var formSubmitHandler = function (event) {
  event.preventDefault();
  var cityname = cityNameEl.value.trim();

  if (cityname) {
    getLocationCoordinates(cityname);
    cityNameEl.value = "";
  } else {
    alert("Please enter a City Name");
  }
};

// getLocationCoordinates();
// getLocationForecast();

citySearchEl.addEventListener("submit", formSubmitHandler);
