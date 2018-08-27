import React from 'react';
import PropTypes from 'prop-types';

const ViewPickerComponent = ({changeView, activeView}) => (
  <ul className="nav nav-tabs">
    <li className={activeView === "MY_STATUSES" ? "active" : undefined}>
      <a href="#" data-view="MY_STATUSES" onClick={changeView}>
        <span className="fa fa-bullhorn" aria-hidden="true"/>&nbsp;&nbsp;
          My Statuses
      </a>
    </li>
    <li className={activeView === "MY_REPOS" ? "active" : undefined}>
      <a href="#" data-view="MY_REPOS" onClick={changeView}>
        <span className="fa fa-github" aria-hidden="true"/>&nbsp;&nbsp;
          My Repos
      </a>
    </li>
  </ul>
);

ViewPickerComponent.displayName = 'ViewPickerComponent';

ViewPickerComponent.propTypes = ({
  changeView: PropTypes.func.isRequired,
  activeView: PropTypes.oneOf(['MY_STATUSES', 'MY_REPOS']).isRequired
});

export default ViewPickerComponent;
