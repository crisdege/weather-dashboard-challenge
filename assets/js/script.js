var citySearchEl = document.querySelector("#city-search");
var cityNameEl = document.querySelector("#city-name");
var cityName = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var uv = document.querySelector("#uv");
var currentDate = moment().format("M/D/YYYY");
var weathericonone = document.querySelector("#iconone");
var cityButtonEl = document.querySelector("#history");

// will get latitude and longitude of city , and passes the info to weather function
var getLocationCoordinates = function (name) {
  var apiUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    name +
    "&appid=f675d7e4c5368e20a20492b4a37fbb0c";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      // console.log(data);
      document.getElementById("current-forecast").style.display = "block";
      displayWeather(data[0].lat, data[0].lon);
      displayForecast(data[0].lat, data[0].lon);

      var city = data[0].name;
      console.log(city);
      saveCity(city);
      cityName.innerHTML = city + " (" + currentDate + ") ";
    });
  });
};

//displays current wether
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
      document.getElementById("five-day").style.display = "block";
      var currtemp = data.current.temp;
      var currentwind = data.current.wind_speed;
      var currenthumidity = data.current.humidity;
      var currentuv = data.current.uvi;

      var iconimg = data.daily[0].weather[0].icon;
      var currentimg = new Image();
      currentimg.src =
        "http://openweathermap.org/img/wn/" + iconimg + "@2x.png";

      document.getElementById("icon").appendChild(currentimg);

      temp.innerHTML = "Temp: " + currtemp + "°F";
      wind.innerHTML = "Wind: " + currentwind + " MPH";
      humidity.innerHTML = "Humidity: " + currenthumidity + "%";
      uv.innerHTML = "UV Index: " + currentuv;

      var iconimg = data.current.weather[0].icon;
      console.log(iconimg);
      weathericon = "http://openweathermap.org/img/wn/" + iconimg + "@2x.png";
    });
  });
};

//displays 5 day forecast
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

      var iconimgone = data.daily[0].weather[0].icon;
      var imgone = new Image();
      imgone.src = "http://openweathermap.org/img/wn/" + iconimgone + "@2x.png";

      dayone.innerHTML = dayonedate;
      document.getElementById("iconone").appendChild(imgone);
      tempone.innerHTML = "Temp: " + forecasttempone + "°F";
      windone.innerHTML = "Wind: " + forecastwindone + " MPH";
      humidityone.innerHTML = "Humidity: " + forecasthumidityone + "%";

      //day two forecast
      var daytwodate = moment().add(2, "days").format("M/D/YYYY");
      var forecasttemptwo = data.daily[1].temp.max;
      var forecastwindtwo = data.daily[1].wind_speed;
      var forecasthumiditytwo = data.daily[1].humidity;

      var iconimgtwo = data.daily[1].weather[0].icon;
      var imgtwo = new Image();
      imgtwo.src = "http://openweathermap.org/img/wn/" + iconimgtwo + "@2x.png";

      daytwo.innerHTML = daytwodate;
      document.getElementById("icontwo").appendChild(imgtwo);
      temptwo.innerHTML = "Temp: " + forecasttemptwo + "°F";
      windtwo.innerHTML = "Wind: " + forecastwindtwo + " MPH";
      humiditytwo.innerHTML = "Humidity: " + forecasthumiditytwo + "%";

      //day three forecast
      var daythreedate = moment().add(3, "days").format("M/D/YYYY");
      var forecasttempthree = data.daily[2].temp.max;
      var forecastwindthree = data.daily[2].wind_speed;
      var forecasthumiditythree = data.daily[2].humidity;

      var iconimgthree = data.daily[2].weather[0].icon;
      var imgthree = new Image();
      imgthree.src =
        "http://openweathermap.org/img/wn/" + iconimgthree + "@2x.png";

      daythree.innerHTML = daythreedate;
      document.getElementById("iconthree").appendChild(imgthree);
      tempthree.innerHTML = "Temp: " + forecasttempthree + "°F";
      windthree.innerHTML = "Wind: " + forecastwindthree + " MPH";
      humiditythree.innerHTML = "Humidity: " + forecasthumiditythree + "%";

      //day four forecast
      var dayfourdate = moment().add(4, "days").format("M/D/YYYY");
      var forecasttempfour = data.daily[3].temp.max;
      var forecastwindfour = data.daily[3].wind_speed;
      var forecasthumidityfour = data.daily[3].humidity;

      var iconimgfour = data.daily[3].weather[0].icon;
      var imgfour = new Image();
      imgfour.src =
        "http://openweathermap.org/img/wn/" + iconimgfour + "@2x.png";

      dayfour.innerHTML = dayfourdate;
      document.getElementById("iconfour").appendChild(imgfour);
      tempfour.innerHTML = "Temp: " + forecasttempfour + "°F";
      windfour.innerHTML = "Wind: " + forecastwindfour + " MPH";
      humidityfour.innerHTML = "Humidity: " + forecasthumidityfour + "%";

      //day five forecast
      var dayfivedate = moment().add(5, "days").format("M/D/YYYY");
      var forecasttempfive = data.daily[4].temp.max;
      var forecastwindfive = data.daily[4].wind_speed;
      var forecasthumidityfive = data.daily[4].humidity;

      var iconimgfive = data.daily[4].weather[0].icon;
      var imgfive = new Image();
      imgfive.src =
        "http://openweathermap.org/img/wn/" + iconimgfive + "@2x.png";

      dayfive.innerHTML = dayfivedate;
      document.getElementById("iconfive").appendChild(imgfive);
      tempfive.innerHTML = "Temp: " + forecasttempfive + "°F";
      windfive.innerHTML = "Wind: " + forecastwindfive + " MPH";
      humidityfive.innerHTML = "Humidity: " + forecasthumidityfive + "%";
    });
  });
};

var formSubmitHandler = function (event) {
  event.preventDefault();
  var cityname = cityNameEl.value.trim();

  if (cityname) {
    getLocationCoordinates(cityname);

    cityname.value = "";
  } else {
    alert("Please enter a City Name");
  }
};
var searchHistory = [];

var saveCity = function (city) {
  if (searchHistory.indexOf(city) !== -1) {
    return;
  }
  var cityArr = JSON.parse(localStorage.getItem("cityArr")) || [];
  cityArr.push(city);
  localStorage.setItem("cityArr", JSON.stringify(cityArr));
};

citySearchEl.addEventListener("submit", formSubmitHandler);

var loadHistory = function () {
  var savedCity = localStorage.getItem("cityArr");
  // if there are no tasks, set tasks to an empty array and return out of the function
  if (savedCity) {
    searchHistory = JSON.parse(savedCity);
  }
  console.log(searchHistory);
  // else, load up saved tasks

  // parse into array of objects
  // savedCity = JSON.parse(savedCity);

  // loop through savedTasks array
  // for (var i = 0; i < savedCity.length; i++) {
  //   // pass each task object into the `createTaskEl()` function
  createButtonEl();
  // }
};

var createButtonEl = function () {
  console.log("here we are");
  for (var i = 0; i <= searchHistory.length - 1; i++) {
    var cityButton = document.createElement("button");
    cityButton.textContent = searchHistory[i];
    cityButton.setAttribute("data-city", searchHistory[i]);
    console.log(i);
    cityButtonEl.appendChild(cityButton);
  }
};

var buttonForecast = function (event) {
  // document.getElementById("current-forecast").replaceChildren();
  console.log("clicked history");
  var button = event.target;
  var buttonclick = button.getAttribute("data-city");
  console.log(buttonclick);
  getLocationCoordinates(buttonclick);
};

cityButtonEl.addEventListener("click", buttonForecast);
loadHistory();
