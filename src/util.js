const SWIPE_UP = 'SWIPE_UP';
const SWIPE_DOWN = 'SWIPE_DOWN';
const SWIPE_LEFT = 'SWIPE_LEFT';
const SWIPE_RIGHT = 'SWIPE_RIGHT';

const swipeDirection = touchObject => {
  const { startX, startY, currX, currY } = touchObject;

  const deltaX = currX - startX;
  const deltaY = currY - startY;
  let direction;
  const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
  if (angle < 45 && angle > -45) {
    direction = SWIPE_RIGHT;
  } else if ((angle <= 180 && angle > 135) || (angle < -135 && angle > -180)) {
    direction = SWIPE_LEFT;
  } else if (angle > 45 && angle < 135) {
    direction = SWIPE_DOWN;
  } else if (angle < -45 && angle > -135) {
    direction = SWIPE_UP;
  }
  return direction;
};

const swipeDistance = touchObject => {
  const { startX, startY, currX, currY } = touchObject;
  return Math.round(Math.sqrt(Math.pow(currX - startX, 2) + Math.pow(currY - startY, 2)));
};

export {
  swipeDirection,
  swipeDistance,
  SWIPE_UP,
  SWIPE_DOWN,
  SWIPE_LEFT,
  SWIPE_RIGHT
};
