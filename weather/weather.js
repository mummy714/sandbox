var url = "https://api.forecast.io/forecast/6d18c85388366ada86a47d2950700959/41.48954391,-75.70288086";
function getWeatherData() {
	console.log("getWeatherData()");
	$.ajax({
		url: url,
		type: "GET",
		crossDomain: true,
		dataType: "jsonp",
		success: function(data) {
			console.log(data);

			$('#weatherData')[0].innerHTML = data.minutely.summary;
		}
	});
}
