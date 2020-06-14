import React, { useContext } from 'react';
import { LikesContext } from '../../context/Likes/likesContext';
import LikesState from '../../context/Likes/likesState'


const Likes = () => {

  const likesContext2 = useContext(LikesContext);
  console.log(likesContext2)

  return (
    <div className='col-4'>
      <button
        type='button'
        className='btn btn-primary'
        name='likesCount'
        value={likesContext2}
        onClick={likesContext2.likeClicked}
      >
        Like
        </button>
    </div>

  );
};

export default Likes;
