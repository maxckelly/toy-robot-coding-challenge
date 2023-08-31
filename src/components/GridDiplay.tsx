import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {RobotPosition} from '../screens/Board';

export const Grid = React.memo(
  ({robotPosition}: {robotPosition: RobotPosition}) => {
    const gridSize = 5;
    const data = Array.from({length: gridSize * gridSize}, (_, index) => index);

    const renderItem = ({item}) => {
      const x = item % gridSize;
      const y = Math.floor(item / gridSize);

      const isRobotHere = x === robotPosition.x && y === robotPosition.y;

      return (
        <View style={[styles.gridItem, isRobotHere && styles.robotSquare]}>
          {isRobotHere && (
            <View>
              <Text
                style={{transform: [{rotate: `${robotPosition.facing}deg`}]}}>
                🤖
              </Text>
            </View>
          )}
        </View>
      );
    };

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        numColumns={gridSize}
        contentContainerStyle={styles.gridContainer}
      />
    );
  },
);

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 16,
  },
  gridItem: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  robotSquare: {
    backgroundColor: 'green',
  },
});
