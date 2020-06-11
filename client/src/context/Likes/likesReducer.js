import {
    LIKED
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LIKED:
            return {
                ...state,
                likesCount: action.likesCount + 1
            };
        default:
            return state;
    }
};

