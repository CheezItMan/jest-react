import React from 'react';
import { shallow } from 'enzyme';
import App from 'App';
import CommentForm from 'components/CommentForm';
import CommentList from 'components/CommentList';


describe('App', () => {
  let wrapped = null;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });



  it('renders the comment box', () => {

    expect(wrapped.find(CommentForm).length).toEqual(1);
  });

  it('renders the CommentList', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
