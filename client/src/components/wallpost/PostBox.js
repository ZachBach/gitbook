import React from "react"

const PostBox = () => {

    const postUser = "zmo2"

    return (
        <div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">{postUser}</label>
                <div class="form-control" id="exampleFormControlTextarea1" rows="3">This should show up after you submit the message</div>
            </div>
        </div>
    )
}

export default PostBox;