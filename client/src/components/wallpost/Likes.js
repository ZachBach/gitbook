import React, { useContext, useState } from "react"
import LikesContext from "../../context/Likes/likesContext"


const Likes = () => {

    const [wallposting, setWallPosting] = useState([]);
    const likesContext = useContext(LikesContext)
    const [state, setState] = useState([])

    const onClickLike = (e) => {
        let clickedValue = e.target.value

        setState({
            ...state,
            [e.target.name]: clickedValue
        })
    }

    console.log(likesContext + "-----")


    return (
        <div className="col-4">
            <button type="button"
                class="btn btn-primary"
                value={state.likesCount}
                name="likesCount"
                onClick={onClickLike}>
                Like
            </button>
        </div>
    )
}

export default Likes;

