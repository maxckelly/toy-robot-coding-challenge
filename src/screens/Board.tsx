import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Grid} from '../components/GridDiplay';
import {FacingPosition, useRobot} from '../hooks/useRobot';

export type RobotPosition = {
  x: number;
  y: number;
  facing: FacingPosition;
};

export const Board = () => {
  const [command, setCommand] = useState('');

  const {
    robotPosition,
    handleReportCommand,
    handleInvalidCommand,
    handleRightCommand,
    handleLeftCommand,
    handlePlaceCommand,
    handleMoveCommand,
  } = useRobot();

  const handleExecute = () => {
    const [action, args] = command.split(/\s+/);

    switch (action.toUpperCase()) {
      case 'PLACE':
        handlePlaceCommand(args);
        break;
      case 'MOVE':
        handleMoveCommand();
        break;
      case 'LEFT':
        handleLeftCommand();
        break;
      case 'RIGHT':
        handleRightCommand();
        break;
      case 'REPORT':
        handleReportCommand();
        break;
      default:
        handleInvalidCommand();
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Toy Robot Simulator</Text>
      </View>
      <View style={styles.gridContainer}>
        <Grid robotPosition={robotPosition} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter command..."
          value={command}
          onChangeText={setCommand}
        />
        <Button title="Run" onPress={handleExecute} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 16,
  },

  titleContainer: {
    marginTop: 50,
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  gridContainer: {
    flex: 2,
  },

  inputContainer: {
    flex: 1,
    width: '100%',
  },

  input: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
  },

  output: {
    fontSize: 16,
    marginTop: 16,
  },
});
