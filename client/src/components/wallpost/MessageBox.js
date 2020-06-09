import React, { useState, useContext } from 'react';
import WallMsgContext from '../../context/WallMessages/wallMsgContext';

const MessageBox = () => {
    const [wallposting, setWallPosting] = useState([]);
    const wallMsgContext = useContext(WallMsgContext);

    const [state, setState] = useState('');

    const onChange = (e) => {
        const inputValue = e.target.value;
        setState({
            ...state,
            [e.target.name]: inputValue,
        });
    };

    return (
        <div>
            <div class='form-group'>
                <label for='exampleFormControlTextarea1'>githubHandle</label>
                <textarea
                    onChange={onChange}
                    class='form-control'
                    id='exampleFormControlTextarea1'
                    name="msgcontent"
                    rows='3'></textarea>
            </div>
        </div>
    );
};

export default MessageBox;
