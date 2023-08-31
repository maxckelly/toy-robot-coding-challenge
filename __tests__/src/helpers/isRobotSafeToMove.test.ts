import {isRobotSafeToMove} from '../../../src/helpers/isRobotSafeToMove';

describe('Given user has moved robot', () => {
  describe('AND move is unsafe for robot', () => {
    test('Should return false', () => {
      expect(isRobotSafeToMove(10, 6)).toBeFalsy();
    });
  });

  describe('AND move is safe for robot', () => {
    test('Should return true', () => {
      expect(isRobotSafeToMove(2, 4)).toBeTruthy();
    });
  });
});
