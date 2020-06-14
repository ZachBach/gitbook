import React, { useContext } from 'react';
import { LikesContext } from '../../context/Likes/likesContext';

const LikesCount = () => {
  console.log(LikesContext);
  const likesContext2 = useContext(LikesContext);

  // console.log(likesContext2);
  // console.log('hello');
  return <h1>Hello </h1>;
};

export default LikesCount;
