import React, { useReducer } from 'react';
// import axios from 'axios';
import InputContext from './inputContext';
import InputReducer from './inputReducer';
import {
  SIGN_UP,
  // SIGN_IN,
  SET_LOADING
} from '../types';

const InputState = (props) => {
  const initialState = {
    userdata: [{
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }],
    loading: false,
  };

  const [state, dispatch] = useReducer(InputReducer, initialState);

  //   Sign Up Users
  const signUp = async (text) => {
    setLoading();
  
    dispatch({
      type: SIGN_UP,
      payload: res.data.items,
    });
  };

  //  Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <InputContext.Provider
      value={{
        userdata: state.userdata,
        loading: state.loading,
        signUp
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputState;
