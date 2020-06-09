import React from "react"

const Chatbox = () => {
    return (
        <div>
            <div className="incoming_msg">

                <div className="incoming_msg_img">
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" style={{ width: "100px" }}></img>
                </div>

                <div className="received_msg">

                    <div className="received_withd_msg">
                        <p>
                            a random message
                            </p>
                        <span className="time_date"> 11:01 AM    |    Today</span>
                    </div>
                </div>

            </div>

            <div className="type_msg">
                <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message" />
                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>

            </div>
        </div >
    )
}

export default Chatbox