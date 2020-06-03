import React from "react"
import MessageBox from "./MessageBox"
import Likes from "./Likes"
import Reply from "./Reply"

const WallPost = () => {
    return (
        <div>
            <MessageBox />
            <div>
                <Likes />
                <Reply />
            </div>
        </div>
    )
}

export default WallPost;