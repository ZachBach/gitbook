import React from "react"
import MessageBox from "./MessageBox"
import Likes from "./Likes"
import Reply from "./Reply"
import SubmitContent from "./Submit"

const WallPost = () => {
    return (
        <div>
            <MessageBox />
            <SubmitContent />
        </div>
    )
}

export default WallPost;