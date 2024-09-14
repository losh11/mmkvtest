import {createAction, createSlice} from '@reduxjs/toolkit';
import {AppThunk} from './types';

// types
interface INumpad {
  numpad: number;
}

// initial state
const initialState = {
  numpad: 0,
} as INumpad;

// actions
const updateNumpadAction = createAction<number>('numpad/updateNumpadAction');

// functions
export const updateNumpad =
  (value: number): AppThunk =>
  async dispatch => {
    dispatch(updateNumpadAction(value));
  };

// slice
export const numpadSlice = createSlice({
  name: 'numpad',
  initialState,
  reducers: {
    updateNumpadAction: (state, action) => ({
      ...state,
      numpad: state.numpad + action.payload,
    }),
  },
});

export default numpadSlice.reducer;
