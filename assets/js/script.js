var getLocationCoordinates = function () {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=London&appid=f675d7e4c5368e20a20492b4a37fbb0c"
  ).then(function (response) {
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
getLocationCoordinates();
getLocationForecast();
