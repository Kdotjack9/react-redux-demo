import React from 'react';
import PropTypes from 'prop-types';

import HeaderCardComponent from './HeaderCardComponent';

const RootComponent = ({myName}) => (
  <div className="container">
    <h1>React/Redux Demo</h1>

    <HeaderCardComponent name={myName}/>

  </div>
);

RootComponent.displayName = "RootComponent";

RootComponent.propTypes = ({
  myName: PropTypes.string.isRequired
});

export default RootComponent;
