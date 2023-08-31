import {FacingPosition} from '../hooks/useRobot';

export const getLeftEnumValue = (
  facingPositionValues: (string | FacingPosition)[],
  robotPosition: number,
) => {
  const currentIndex = facingPositionValues.indexOf(robotPosition);
  if (currentIndex === 1) {
    return facingPositionValues[0];
  }

  if (currentIndex === 0) {
    return facingPositionValues[3];
  }

  return facingPositionValues[currentIndex - 1];
};

export const getRightEnumValue = (
  facingPositionValues: (string | FacingPosition)[],
  robotPosition: number,
) => {
  const currentIndex = facingPositionValues.indexOf(robotPosition);

  if (currentIndex === 3) {
    return facingPositionValues[0];
  }

  if (currentIndex === 0) {
    return facingPositionValues[1];
  }

  return facingPositionValues[currentIndex + 1];
};
