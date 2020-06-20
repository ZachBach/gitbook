import React, { useContext, useEffect } from 'react';
import { LikesContext } from '../../context/Likes/likesContext';

<<<<<<< HEAD
const Likes = () => {

  const likesContext2 = useContext(LikesContext);

  const { postid } = likesContext2;
  
  useEffect(() => {
    likesContext2.onLoad()
  }, [])
  
  console.log(postid)
  console.log('+++++++++++++++++++')
=======
const Likes = (props) => {
  const likesContext2 = useContext(LikesContext);

  console.log(likesContext2);
  // useEffect(() => {
  //   likesContext2.onLoad();
  // }, []);
>>>>>>> bf403932a274fc1b7f5a2ab78ab44b8a1d542655

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
    </div>
  );
};

export default Likes;
