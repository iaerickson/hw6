$(document).ready(function() {
  function buildQueryURL() {
    //API Key from site
    var apiKey = "37a12e47889d8530f771e7288f681e8f";
    var city = $("#city-search").val();
    //url used to query the API
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&APPID=" +
      apiKey;
    return queryURL;
  }
  $("#run-search").click(function(event) {
    event.preventDefault();

    var query = buildQueryURL();

    $.ajax({
      //testing url with api call they emailed me
      url: query,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      displayInfo(response);
    });
  });
  //dynamically posts info to city dashboard div
  //change this to it received the
  function displayInfo(response) {
    var div = $("<div>");

    div.text("Temperature: " + response.main.temp);
    $("#city-dashboard").append(div);

    //At the end of the function, we want to save displayInfo data to local storage for easy access
  }
  //After a city is called, we will want to save the dashboard data to local storage.
  function cityDataSaver(city) {}
});
