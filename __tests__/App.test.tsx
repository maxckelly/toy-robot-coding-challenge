import 'react-native';
import React from 'react';
import {Board} from '../src/screens/Board';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Board />);
});
