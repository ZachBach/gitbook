import React, { Component } from 'react';
import '../../App.css';
import Messages from '../../Messages';
import Input from '../../Input';
import { fakeAuth } from '../privateroute/PrivateRoute';
import SignIn from './SignIn';



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


// const chatUsername = () => {
//   fetch('/api/currentuser', {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then((data) => 
//       data.json())      
//     .then((result) => {
//       console.log('in the dot then')
//       console.log(result[0].CurrentUserGitHubHandle);
//       currentGithubHandle = result[0].CurrentUserGitHubHandle;
//       return currentGithubHandle;
//     })
//   }
  
// chatUsername(currentGithubHandle)
// console.log(currentGithubHandle)

// function githubHandle() {
//   const chatName = [this.currentGithubHandle];
//   console.log(chatName);
// }

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
  // componentDidMount() {
    // chatUsername().then((gitHubHandle) => {
    //   // const gitHubHandle = chatUsername();
    //   this.setState({
    //     member: { username: gitHubHandle.CurrentUserGitHubHandle },
    //   });
    // });
  // }
  state = {
    messages: [],
    member: {
      username: '',
      color: randomColor(),
    },
  };

  constructor() {
        super();

        chatUsername().then((gitHubHandle) => {
          console.log(
            gitHubHandle.CurrentUserGitHubHandle +
              'in th onsendmessage===================='
          );
          // const gitHubHandle = chatUsername();
          this.setState({
            member: { username: gitHubHandle.CurrentUserGitHubHandle },
          });
        });
      

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

    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default ChatApp;
