import React from 'react';

const PostBox = () => {

    fetch('/api/wallpost', {
        method: 'GET',
        headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        },
    })
        .then((result) => {
        console.log(result);
        })
        .then((data) => {
        console.log(data);
        });

    return (
        <div>
            <div class='form-group'>
                <label for='exampleFormControlTextarea1'>githubHandle</label>
                <div class='form-control' id='exampleFormControlTextarea1' rows='3'>
                    Message
        </div>
            </div>
        </div>
    );
};

export default PostBox;
