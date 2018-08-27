import React from 'react';
import PropTypes from 'prop-types';

import HeaderCardComponent from './HeaderCardComponent';
import ViewPickerContainer from '../containers/ViewPickerContainer';

const RootComponent = ({activeView, myName}) => (
  <div className="container">
    <h1>React/Redux Demo</h1>

    <HeaderCardComponent name={myName}/>

    <ViewPickerContainer/>

    <br/>

  </div>
);

RootComponent.displayName = "RootComponent";

RootComponent.propTypes = ({
  myName: PropTypes.string.isRequired
});

export default RootComponent;
