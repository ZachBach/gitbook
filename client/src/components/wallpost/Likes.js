import React, { useContext, useState } from "react"
import LikesContext from "../../context/Likes/likesContext"


const Likes = () => {

    const [likesCount, setLikesCount] = useState([]);
    const likesContext = useContext(LikesContext);
    const [state, setState] = useState("");

    const onClickLike = (e) => {

        setState({
            ...state
        })
    };

    return (
        <div className="col-4">
            <button type="button" class="btn btn-primary" onClick={onClickLike}>Like:{likesCount}</button>
        </div>
    )
}

export default Likes;

