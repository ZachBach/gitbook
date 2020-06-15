import { LIKED, UNLIKED, LOAD } from '../types'
export default (state, action) => {
  switch (action.type) {

    case LIKED:
      { console.log("CASE LIKED") }
      return {
        ...state,
        likesCount: state.likesCount + 1,
        status: true,
        postid: state.postid,
        userid: state.userid
      }
    case UNLIKED:
      { console.log("CASE UNLIKED") }
      return {
        ...state,
        likesCount: state.likesCount - 1,
        status: false,
        postid: state.postid,
        userid: state.userid
      }
    case LOAD:
      { console.log("CASE LOAD") }
      return {
        ...state,
        likesCount: action.payload.likesCount,
        status: action.payload.status,
        postid: action.payload.postid,
        userid: action.payload.userid
      }
    default:
      return state;
  }
}
