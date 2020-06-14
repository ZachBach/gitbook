import React from "react"
import Likes from "./Likes"
import Reply from "./Reply"
import PostBox from "./PostBox"
import LikesState from '../../context/Likes/likesState'

const WallPost = () => {
    return (

        <LikesState>
            <div>
                <PostBox />
                <div className="row">

                    <Likes />
                    <Reply />

                </div>
            </div>
        </LikesState>
    )
}

export default WallPost;