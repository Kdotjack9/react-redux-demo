import React from 'react';
import PropTypes from 'prop-types';

import HeaderCardComponent from './HeaderCardComponent';
import ViewPickerContainer from '../containers/ViewPickerContainer';
import PostStatusFormContainer from '../containers/PostStatusFormContainer';
import PostsContainer from '../containers/PostsContainer';

const RootComponent = ({activeView, myName}) => (
  <div className="container">
    <h1>React/Redux Demo</h1>

    <HeaderCardComponent name={myName}/>

    <ViewPickerContainer/>

    <br/>

    {activeView === "MY_STATUSES" && (
      <div>
        <PostStatusFormContainer/>
        <PostsContainer/>
      </div>
    )}
    {activeView === "MY_REPOS" && (
      <div>
        Coming Soon!
      </div>
    )}
  </div>
);

RootComponent.displayName = "RootComponent";

RootComponent.propTypes = ({
  myName: PropTypes.string.isRequired
});

export default RootComponent;
