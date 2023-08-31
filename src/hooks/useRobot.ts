import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {getLeftEnumValue, getRightEnumValue} from '../helpers/getMoveDirection';
import {isRobotSafeToMove} from '../helpers/isRobotSafeToMove';

export enum FacingPosition {
  NORTH = 0,
  EAST = 90,
  SOUTH = 180,
  WEST = 270,
}

export const useRobot = () => {
  const [robotPosition, setRobotPosition] = useState({
    x: 0,
    y: 0,
    facing: FacingPosition.NORTH,
  });

  const handlePlaceCommand = useCallback((locationArgs: string) => {
    const [x, y, facing] = locationArgs.split(','); // Assuming args are in format "x,y,facing"
    const newX = parseInt(x, 10);
    const newY = parseInt(y, 10);

    setRobotPosition({
      x: newX,
      y: newY,
      facing: FacingPosition[facing.toUpperCase()],
    });
  }, []);

  const handleMoveCommand = useCallback(() => {
    const {x: currentX, y: currentY, facing: currentF} = robotPosition;
    let newX = currentX;
    let newY = currentY;

    switch (currentF) {
      case FacingPosition.SOUTH:
        newY += 1;
        break;
      case FacingPosition.NORTH:
        newY -= 1;
        break;
      case FacingPosition.EAST:
        newX += 1;
        break;
      case FacingPosition.WEST:
        newX -= 1;
        break;
      default:
        break;
    }

    const robotSafe = isRobotSafeToMove(newX, newY);
    robotSafe
      ? setRobotPosition({x: newX, y: newY, facing: currentF})
      : alertUnsafeMove();
  }, [robotPosition]);

  const alertUnsafeMove = () => {
    Alert.alert('DANGER:', 'Your robot will not be safe with that move');
  };

  const handleReportCommand = () => {
    Alert.alert(
      'Robot Position:',
      `x: ${robotPosition.x}, y: ${robotPosition.y}, facing: ${
        FacingPosition[robotPosition.facing]
      }`,
    );
  };

  // To ensure we're using the typed value.
  const facingPositionValues = Object.values(FacingPosition).filter(
    value => typeof value === 'number',
  );

  const handleLeftCommand = () => {
    const nextFacing = getLeftEnumValue(
      facingPositionValues,
      robotPosition.facing,
    );

    setRobotPosition({
      x: robotPosition.x,
      y: robotPosition.y,
      facing: nextFacing,
    });
  };

  const handleRightCommand = () => {
    const nextFacing = getRightEnumValue(
      facingPositionValues,
      robotPosition.facing,
    );

    setRobotPosition({
      x: robotPosition.x,
      y: robotPosition.y,
      facing: nextFacing,
    });
  };

  const handleInvalidCommand = () => {
    Alert.alert(
      'Command error',
      'Please enter either "REPORT", "PLACE", "MOVE", "LEFT", or "RIGHT"',
    );
  };

  return {
    robotPosition,
    handleMoveCommand,
    handleReportCommand,
    handleInvalidCommand,
    handleRightCommand,
    handleLeftCommand,
    handlePlaceCommand,
  };
};
