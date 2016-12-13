'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SWIPE_UP = 'SWIPE_UP';
var SWIPE_DOWN = 'SWIPE_DOWN';
var SWIPE_LEFT = 'SWIPE_LEFT';
var SWIPE_RIGHT = 'SWIPE_RIGHT';

var swipeDirection = function swipeDirection(touchObject) {
  var startX = touchObject.startX,
      startY = touchObject.startY,
      currX = touchObject.currX,
      currY = touchObject.currY;


  var deltaX = currX - startX;
  var deltaY = currY - startY;
  var direction = void 0;
  var angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
  if (angle < 45 && angle > -45) {
    direction = SWIPE_RIGHT;
  } else if (angle <= 180 && angle > 135 || angle < -135 && angle > -180) {
    direction = SWIPE_LEFT;
  } else if (angle > 45 && angle < 135) {
    direction = SWIPE_DOWN;
  } else if (angle < -45 && angle > -135) {
    direction = SWIPE_UP;
  }
  return direction;
};

var swipeDistance = function swipeDistance(touchObject) {
  var startX = touchObject.startX,
      startY = touchObject.startY,
      currX = touchObject.currX,
      currY = touchObject.currY;

  return Math.round(Math.sqrt(Math.pow(currX - startX, 2) + Math.pow(currY - startY, 2)));
};

exports.swipeDirection = swipeDirection;
exports.swipeDistance = swipeDistance;
exports.SWIPE_UP = SWIPE_UP;
exports.SWIPE_DOWN = SWIPE_DOWN;
exports.SWIPE_LEFT = SWIPE_LEFT;
exports.SWIPE_RIGHT = SWIPE_RIGHT;