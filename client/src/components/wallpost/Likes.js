import React, { useContext, useEffect } from 'react';
import { LikesContext } from '../../context/Likes/likesContext';


const Likes = (props) => {

  const likesContext2 = useContext(LikesContext);

  useEffect(() => {
    likesContext2.onLoad()
  }, [])


  return (
    <div className='col-4'>
      <button
        type='button'
        postid={props.postid}
        className='btn btn-primary'
        name='likesCount'
        value={likesContext2}
        onClick={likesContext2.status ? likesContext2.unlikeClicked : likesContext2.likeClicked}
      >
        <i>
          <img src={likesContext2.status
            ?
            "https://img.icons8.com/material-two-tone/24/000000/thumbs-down.png"
            :
            "https://img.icons8.com/material-two-tone/24/000000/thumb-up--v1.png"} />
        </i>
      </button>
    </div >

  );
};

export default Likes;
