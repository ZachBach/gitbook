import React from 'react';
import MessageBox from './MessageBox';
import Likes from './Likes';
import Reply from './Reply';
import SubmitContent from './Submit';

const WritePost = () => {
  return (
    <div>
      <MessageBox />
      <SubmitContent />
    </div>
  );
};

export default WritePost;
