import React, { Component } from 'react';
import 'components/CommentForm.css';


class CommentForm extends Component {
  render() {
    return (
      <form>
        <textarea>

        </textarea>
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

export default CommentForm;
