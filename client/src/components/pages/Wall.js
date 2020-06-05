import React from "react";
import WallPost from "../wallpost/WallPost"
import WritePost from "../wallpost/WritePost"
import Chatbox from "../Chats/Chatbox";

const Wall = () => {
    return (
        <div>
            <WallPost />
            <br />
            <WritePost />
            <br />
            <Chatbox />
        </div>

    )
}

export default Wall;