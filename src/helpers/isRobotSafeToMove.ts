export const isRobotSafeToMove = (newX: number, newY: number) => {
  if (newX >= 0 && newX <= 4 && newY >= 0 && newY <= 4) {
    return true;
  } else {
    return false;
  }
};
