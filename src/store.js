import { legacy_createStore } from 'redux';

const initialState = {
  isPlaying: false,
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(audioReducer);

export default store;
