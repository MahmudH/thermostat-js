jQuery(document).ready(function() {

  var city = 'Paris';
  var country ='France';
  $.getJSON("http://api.wunderground.com/api/254fd2dba5b312ab/geolookup/conditions/q/autoip.json", function(parsed_json) {
    var location = parsed_json.location.city;
    $("#display-location").html(location);

  }

);
});
