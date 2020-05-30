import {
  SIGN_UP,
  SIGN_IN
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        userdata: action.payload,
        loading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

