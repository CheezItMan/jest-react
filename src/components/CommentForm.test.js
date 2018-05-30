import React from 'react';
import CommentForm from 'components/CommentForm';
import { mount } from 'enzyme';

describe('CommentForm', () => {
  it('has a text area and a button', () => {
    const wrapped = mount(<CommentForm />);

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('input[type="submit"]').length).toEqual(1);


  });
});
