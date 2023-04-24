import { IS_AUTHENTICATED } from '../types';

export default (state, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,

                CurrentUserGitHubHandle: action.payload
            };
        default:
            return state;
    }
};
