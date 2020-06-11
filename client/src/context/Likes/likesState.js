import React, { useReducer } from 'react'
import LikesContext from './likesContext'
import { LIKED } from '../types';
import LikesReducer from './likesReducer'



const LikesState = (props) => {
    var initialState = {
        likesCount: 0
    }

    const [state, dispatch] = useReducer(LikesReducer, initialState)

    // const likeClicked = async (text) => {
    //     dispatch({
    //         type: LIKED,
    //         payload: res.data,
    //     })
    // }

    return (
        <LikesContext.Provider value={{ likesCount: state.likesCount }}>
            {props.children}
        </LikesContext.Provider>
    );
};

export default LikesState;