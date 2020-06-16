import React, { Component } from 'react';
import '../../App.css';
import Messages from '../../Messages';
import Input from '../../Input';
import { fakeAuth } from '../privateroute/PrivateRoute';
import SignIn from './SignIn';

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

const chatUsername = async () => {
  const getCurrentUser = await fetch('/api/currentuser', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((data) => data.json())
    .then((result) => {
      console.log('---------inside dot then of chatUsername function-------');
      console.log(result[0]);
      return result[0];
    });
  return getCurrentUser;
};

class ChatApp extends Component {
  componentDidMount() {
    chatUsername().then((gitHubHandle) => {
      // const gitHubHandle = chatUsername();
      this.setState({
        member: { username: gitHubHandle.CurrentUserGitHubHandle },
      });
    });
  }
  state = {
    messages: [],
    member: {
      username: [],
      color: randomColor(),
    },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone('v0EiAhIDZNsEFNfj', {
      data: this.state.member,
    });
    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

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
    // chatUsername().then((gitHubHandle) => {
    //   console.log(
    //     gitHubHandle.CurrentUserGitHubHandle +
    //       'in th onsendmessage===================='
    //   );
    //   // const gitHubHandle = chatUsername();
    //   this.setState({
    //     member: { username: gitHubHandle.CurrentUserGitHubHandle },
    //   });
    // });

    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default ChatApp;
