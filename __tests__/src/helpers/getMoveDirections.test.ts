import {
  getLeftEnumValue,
  getRightEnumValue,
} from '../../../src/helpers/getMoveDirection';
import {FacingPosition} from '../../../src/hooks/useRobot';

describe('getLeftEnumValue', () => {
  it('should return the correct left value', () => {
    const values = [
      FacingPosition.NORTH,
      FacingPosition.EAST,
      FacingPosition.SOUTH,
      FacingPosition.WEST,
    ];
    expect(getLeftEnumValue(values, FacingPosition.NORTH)).toBe(
      FacingPosition.WEST,
    );
    expect(getLeftEnumValue(values, FacingPosition.EAST)).toBe(
      FacingPosition.NORTH,
    );
    expect(getLeftEnumValue(values, FacingPosition.SOUTH)).toBe(
      FacingPosition.EAST,
    );
    expect(getLeftEnumValue(values, FacingPosition.WEST)).toBe(
      FacingPosition.SOUTH,
    );
  });
});

describe('getRightEnumValue', () => {
  it('should return the correct right value', () => {
    const values = [
      FacingPosition.NORTH,
      FacingPosition.EAST,
      FacingPosition.SOUTH,
      FacingPosition.WEST,
    ];
    expect(getRightEnumValue(values, FacingPosition.NORTH)).toBe(
      FacingPosition.EAST,
    );
    expect(getRightEnumValue(values, FacingPosition.EAST)).toBe(
      FacingPosition.SOUTH,
    );
    expect(getRightEnumValue(values, FacingPosition.SOUTH)).toBe(
      FacingPosition.WEST,
    );
    expect(getRightEnumValue(values, FacingPosition.WEST)).toBe(
      FacingPosition.NORTH,
    );
  });
});
