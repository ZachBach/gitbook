import React, { Component } from 'react';
import '../../App.css';
import Messages from '../../Messages';
import Input from '../../Input';


function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

// const chatUsername = async () => {
//   const getCurrentUser = await fetch('/api/currentuser', {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then((data) => data.json())
//     .then((result) => {
//       console.log('---------inside dot then of chatUsername function-------');
//       console.log(result[0]);
//       return result[0];
//     });
//   return getCurrentUser;
// };



class ChatApp extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      member: {
        username: 'WHY Delicate Flower',
        color: randomColor(),
      },
    };
  }

  componentDidMount() {
    const curuser = localStorage.getItem("user")

    // this is where we will pass the Githubhandle below
    this.startRoom(curuser);
    this.setState({
      member: { username: curuser },

    });
  }

  startRoom = (name) => {
    this.drone = new window.Scaledrone('v0EiAhIDZNsEFNfj', {
      data: {
        userName: name,
        color: randomColor(),
      },
    });

    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      member.user = this.state.member.username;

      this.setState({ member });
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Git.Chat</h1>
        </div>
        <Messages
          id='chatMessages'
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input id='chatInput' onSendMessage={this.onSendMessage} />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default ChatApp;
