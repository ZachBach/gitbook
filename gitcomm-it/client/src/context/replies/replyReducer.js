import { REPLY_POSTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case REPLY_POSTS:
      return {
        ...state,
        replyArray: action.payload,
      };
    default:
      return state;
  }
};
