var citySearchEl = document.querySelector("#city-search");
var cityNameEl = document.querySelector("#city-name");

// citySearchEl.addEventListener("click", formSubmitHandler);

var getLocationCoordinates = function (name) {
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    name +
    "&appid=f675d7e4c5368e20a20492b4a37fbb0c";
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

var getLocationForecast = function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=f675d7e4c5368e20a20492b4a37fbb0c"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

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
