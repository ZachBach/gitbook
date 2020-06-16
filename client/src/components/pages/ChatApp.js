import React, { Component } from 'react';
import '../../App.css';
import Messages from '../../Messages';
import Input from '../../Input';
import { fakeAuth } from '../privateroute/PrivateRoute';
import SignIn from './SignIn';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext'
import CurrentUserState from '../../context/currentUser/currentUserState';

// function randomName() {
//   const adjectives = [
//     "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
//     "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
//     "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
//     "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long",
//     "late", "lingering", "bold", "little", "morning", "muddy", "old", "red",
//     "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering",
//     "withered", "wild", "black", "young", "holy", "solitary", "fragrant",
//     "aged", "snowy", "proud", "floral", "restless", "divine", "polished",
//     "ancient", "purple", "lively", "nameless"
//   ];
//   const nouns = [
//     "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
//     "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
//     "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
//     "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
//     "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
//     "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
//     "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
//     "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog",
//     "smoke", "star"
//   ];
//   const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//   const noun = nouns[Math.floor(Math.random() * nouns.length)];
//   return adjective + noun;
// }

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

// SignIn(data)
// console.log(data)
// console.log(SignIn(data));

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
      username: '',
      color: randomColor(),
    },
  };

  // static contextType = CurrentUserContext;


  // componentDidMount() {
  //   const context = this.context;

  //   const { member } = { ...this.state };
  //   const currentState = member;
  //   const { username, color } = context.CurrentUserGitHubHandle;
  //   currentState[username] = color;

  //   this.setState({ member: currentState });

  //   console.log(this.state.member)



  //   // var member2 = { ...this.state.member }
  //   // member2.username = context.CurrentUserGitHubHandle
  //   // console.log("MEMBER ")
  //   // console.log(member2)
  //   // this.setState({ member2 });

  // }

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
      // this.setState({ member });
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
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default ChatApp;
