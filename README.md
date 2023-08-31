# Toy Robot Simulator

A simple simulation of a toy robot moving on a 5x5 square tabletop. This project involves creating a user interface (UI) application in React Native that allows users to control and interact with the toy robot using various commands.

## Features

- The robot moves within a 5x5 square tabletop.
- It interprets commands like `PLACE X,Y,F`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT`.
- The robot's initial placement, movements, and rotations are constrained within the tabletop boundaries.
- The user can input commands via a user-friendly interface.
- The UI displays a grid representing the tabletop with the robot's position highlighted.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Install pods for iOS by running `cd ios`, `pod install`,
5. `cd ..`
6. Start the application using `npm start` or `yarn start`.

## Usage

1. Enter commands in the input field.
2. Available commands:
   - `PLACE X,Y,F`: Place the robot on the table at position (X, Y) and facing direction F (NORTH, SOUTH, EAST, WEST).
   - `MOVE`: Move the robot one unit forward in the current direction.
   - `LEFT`: Rotate the robot 90 degrees left.
   - `RIGHT`: Rotate the robot 90 degrees right.
   - `REPORT`: Display the current robot's position.

## Project Structure

- **`hooks/useRobot.ts`**: Custom hook managing robot state and actions.
- **`components/GridDisplay.ts`**: Component responsible for rendering the grid with the robot's position.
- **`screens/Board.ts`**: Main component that integrates the UI components and user input handling.

## Dependencies

- React Native

## Notes

- Ensure the React Native environment is set up before running the project.
- The project emphasizes clean code, modularity, and UI interaction.
- The provided `useRobot` hook handles robot state and actions.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
