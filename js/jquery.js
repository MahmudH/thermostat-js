$(document).ready(function(){
  thermostat = new Thermostat();
  var ps = thermostat.isPowerSaving();
  var showTemp = function() {$('.temperature-display').text(thermostat.showTemperature())};
  var showPowersaving = function() {
    ps = ps ? 'ON' : 'OFF';
    $('.powersaving-display').text(ps);
  };

  showTemp();
  showPowersaving();

  $('.up-button').click(function(){
    thermostat.up();
    showTemp();
  });

  $('.down-button').click(function(){
    thermostat.down();
    showTemp();
  });

  $('.toggle-powersaving').click(function(){
    if(ps == 'OFF'){
      thermostat.turnPowerSavingOn();
      ps = thermostat.isPowerSaving();
    } else {
      thermostat.turnPowerSavingOff();
      ps = thermostat.isPowerSaving();
    }
  showPowersaving();
  });

  $('.reset-button').click(function(){
    thermostat.reset();
    showTemp();
  });

});
