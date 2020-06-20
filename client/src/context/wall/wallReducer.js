import { WALL_POSTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case WALL_POSTS:
      return {
        ...state,
        postArray: action.payload,
        // id: action.payload.id,
        wallPostId: action.payload.wallPostId,
        // wallPostContent: action.payload.wallPostContent,
      };
    default:
      return state;
  }
};
