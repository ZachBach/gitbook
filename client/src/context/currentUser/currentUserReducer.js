import { IS_AUTHENTICATED } from '../types';

export default (state, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            { console.log(action.payload.CurrentUserGitHubHandle) }
            return {
                ...state,
                CurrentUserId: action.payload.CurrentUserId,
                CurrentUserToken: action.payload.CurrentUserToken,
                CurrentUserGitHubHandle: action.payload.CurrentUserGitHubHandle
            };
        default:
            return state;
    }
};
