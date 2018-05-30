import React, { Component } from 'react';
import 'components/CommentForm.css';


class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    }
  }

  handleTextAreaChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }


  handleSubmitForm = (event) => {
    event.preventDefault();

    // Call callback function from props

    this.setState({
      text: '',
    });
  }

  render() {
    console.log(this.state.text);
    return (
      <form onSubmit={ this.handleSubmitForm }>
        <label htmlFor="comment">Comment</label>
        <textarea
           name="comment"
           onChange={ this.handleTextAreaChange }
           value={ this.state.text }
        />
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

export default CommentForm;
