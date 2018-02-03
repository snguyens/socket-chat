import React, { Component } from 'react';
import { sendChatMessage, receiveChatMessages } from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }
  }
  
  componentDidMount() {
    receiveChatMessages((message) => this.setState({
      test: message
    }));
  }

  handleChange(event) {
    sendChatMessage(event.target.value)
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        <form>
          <label>
            Name: <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
      </form>
        </p>
      </div>
    );
  }
}

export default App;
