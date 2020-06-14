import React, { useContext } from 'react';
import { LikesContext } from '../../context/Likes/likesContext';
import LikesState from '../../context/Likes/likesState';

import Test from './LikesCount';

const Likes = () => {
  return (
    <LikesState>
      <div className='col-4'>
        {/* <Test /> */}
        <button
          type='button'
          className='btn btn-primary'
          //   value={state.likesCount}
          name='likesCount'
          onClick={() => {}}>
          Like
        </button>
      </div>
    </LikesState>
  );
};

export default Likes;
