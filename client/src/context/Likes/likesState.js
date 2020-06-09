import React, { useReducer } from 'react'
import LikesContext from './likesContext'
import { LIKED } from '../types';



const LikesState = (props) => {
    const initialState = [{
        likesCount: 0
    }];

    const [state, dispatch] = useReducer(likesReducer, initialState)

    const likeClicked = async (e) => {
        dispatch({
            type: LIKED,
            payload: res.data
        })
    }

    return (
        <LikesContext.Provider value={[{ likesCount: state.likesCount, likeClicked }]}>
            {props.children}
        </LikesContext.Provider>
    )
}

export default LikesState