//GetLocaiton
getLocation("gps", false, 10);
//Variables
var apikey = "6d18c85388366ada86a47d2950700959";
var gpsloc = global("LOC");
var url = "https://api.forecast.io/forecast/"+apikey+"/"+gpsloc;
var keywords = ['rain','snow'];

//flash(url);

$.ajax({
  async: false,
  url: url,
  type: "GET",
  crossDomain: true,
  dataType: "json",
  success: function(data) {
    var summary = data.minutely.summary;
    for (var i=0; i<keywords.length; i++) {
      if (summary.toLowerCase().indexOf(keywords[i]) >= 0) {
        //flash(summary);
        setGlobal("WEATHERSUMMARY", summary);
      }
    }
  }
});
