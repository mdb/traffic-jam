$(document).ready(function () {
  var vehicles = $('div.vehicle');

  for (var i = 0; i < vehicles.length; i ++ ) {
    new window.TJ.Animator($(vehicles[i]));
  }

  new window.TJ.Builder($('div.building'));
});
