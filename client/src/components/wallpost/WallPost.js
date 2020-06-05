import React from "react"
import MessageBox from "./MessageBox"
import Likes from "./Likes"
import Reply from "./Reply"
import PostBox from "./PostBox"

const WallPost = () => {
    return (
        <div>
            <PostBox />
            <div className="row">
                <Likes />
                <Reply />
            </div>
        </div>
    )
}

export default WallPost;