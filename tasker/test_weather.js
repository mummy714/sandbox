//GetLocaiton
getLocation("gps", false, 10);
//Variables
var apikey = "6d18c85388366ada86a47d2950700959";
var gpsloc = global("LOC");
var url = "https://api.forecast.io/forecast/"+apikey+"/"+gpsloc;
flash(url);

$.ajax({
  async: false,
  url: url,
  type: "GET",
  crossDomain: true,
  dataType: "json",
  success: function(data) {
    var summary = data.minutely.summary;
    flash(summary);
    if ((summary.toLowerCase().indexOf("rain") >= 0) ||
      (summary.toLowerCase().indexOf("snow") >= 0)) {
          flash("RAIN or SNOW");
    }
  }
});
