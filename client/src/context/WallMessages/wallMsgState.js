import React, { useReducer } from 'react';
import wallMsgContext from './wallMsgContext';


const wallMsgState = (props) => {
  const initialState = {
    msgcontent: [{
      msg: ""
    }],
    loading: false,
  };
  const [state, dispatch] = useReducer(wallMsgReducer, initialState);


  return (
    <wallMsgContext.Provider
      value={{
        msgcontent: state.msgcontent,
        loading: state.loading,
      }}
    >
      {props.children}
    </wallMsgContext.Provider>
  );
};

export default wallMsgState;
