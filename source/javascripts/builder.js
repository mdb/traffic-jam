window.TJ = window.TJ || {};

window.TJ.Builder = function ($buildingsSelector) {
  this.initialize($buildingsSelector);
};

window.TJ.Builder.prototype.initialize = function ($buildingsSelector) {
  this.buildings = $buildingsSelector;
  this.build();
};

window.TJ.Builder.prototype.build = function () {
  var self = this;

  setInterval(function () {
    $(self.buildings[self.randomIndex()]).addClass('built');
  }, 1000);
};

window.TJ.Builder.prototype.randomIndex = function () {
  var min = 0,
      max = this.buildings.length - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min
};
