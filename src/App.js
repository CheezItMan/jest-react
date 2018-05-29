import React, { Component } from 'react';
import './App.css';
import CommentForm from './components/CommentForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello!
        <CommentForm />
        <input type="submit" value="Add Comment" />
      </div>
    );
  }
}

export default App;
