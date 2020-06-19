import React, { useContext, useEffect } from 'react';
import { LikesContext } from '../../context/Likes/likesContext';

const Likes = (props) => {
  const likesContext2 = useContext(LikesContext);

  console.log(likesContext2);
  // useEffect(() => {
  //   likesContext2.onLoad();
  // }, []);

  console.log(props);
  console.log('0000000000000000000000');
  return (
    <div className='col-4'>
      <button
        type='button'
        postid={props.id}
        className='btn btn-primary'
        name='likesCount'
        value={likesContext2}
        onClick={
          likesContext2.status
            ? () => likesContext2.likeClicked(props.id)
            : () => likesContext2.likeClicked(props.id)
        }>
        <i>
          <img
            src={
              likesContext2.status
                ? 'https://img.icons8.com/material-two-tone/24/000000/thumbs-down.png'
                : 'https://img.icons8.com/material-two-tone/24/000000/thumb-up--v1.png'
            }
          />
        </i>
      </button>
<<<<<<< HEAD
    </div>
=======
      {likesContext2.likesCount}
    </div >

>>>>>>> 75a26b0d6f5ac83eb9f694840e20c701201465bb
  );
};

export default Likes;
