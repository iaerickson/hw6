function buildQueryURL() {
  //API Key from site
  var apiKey = "37a12e47889d8530f771e7288f681e8f";
  var city = $("#city-search").val();
  //url used to query the API
  var queryURL =
    "hhtps://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=" +
    apiKey;
}
$("#run-search").on("click", function(event) {
  event.preventDefault();

  var query = buildQueryURL();

  $.ajax({
    //testing url with api call they emailed me
    url:
      "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=37a12e47889d8530f771e7288f681e8f",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
});
