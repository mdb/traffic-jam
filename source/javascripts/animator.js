window.TJ = {};

window.TJ.Animator = function ($elem) {
  this.initialize($elem);
};

window.TJ.Animator.prototype.initialize = function ($elem) {
  this.originalPosition = $elem.position();

  this.viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };

  this.animate($elem);
};

window.TJ.Animator.prototype.animate = function ($elem) {
  var self = this;

  $elem.animate({
    left: "+=" + (this.viewport.width + 200),
    top: "+=" + (this.viewport.height - 200)
  }, 5000, function () {
    self.reset($elem);
  });
};

window.TJ.Animator.prototype.reset = function ($elem) {
  $elem.css({
    top: this.originalPosition.top,
    left: this.originalPosition.left
  });

  this.animate($elem);
};
