import { combineReducers } from "redux";

// REDUX ACTION TYPES
const types = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
};

export default combineReducers(reducers);
