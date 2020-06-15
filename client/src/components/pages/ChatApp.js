import React, { Component } from 'react';
import '../../App.css';
import Messages from "../../Messages";
import Input from "../../Input";
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




function randomName() {
  // const chatUsername = () => {
  return fetch('/api/currentuser', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
    // .then((data) => data.json())
      // .then((result) => {
      //   console.log('in the dot then');
      //   console.log(result[0].CurrentUserGitHubHandle);
      //   currentGithubHandle = result[0].CurrentUserGitHubHandle;
      //   console.log(currentGithubHandle);
      // });

      
      // };
  // currentGithubHandle = chatUsername();
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

// SignIn(data)
// console.log(data) 
// console.log(SignIn(data));


class ChatApp extends Component {
  currentGitHubUser = randomName()
        .then((data) => data.json())
        .then((result) => {
        console.log(result[0].CurrentUserGitHubHandle)
        return result[0].CurrentUserGitHubHandle
      })


  state = {
    messages: [],
    member: {
      username:       
        // JSON.stringify(result[0].CurrentUserGitHubHandle)
        // const storedGitHubHandle = result[0].CurrentUserGitHubHandle
        // return storedGitHubHandle
      this.currentGitHubUser,  
      // console.log(randomName() + '----11111-1--1-1-'),
        // .then((result) => {(console.log(result[0].CurrentUserGitHubHandle))}),
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
      console.log(JSON.stringify(member) + '------------------');
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
