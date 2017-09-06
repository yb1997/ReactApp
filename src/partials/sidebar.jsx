import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/sidebar.css';

class Sidebar extends Component {

	render() {

		return (
			<div className="sidebar" id="sidebar" key={this}>
        <ul className="sidebar-links d-ib">
          <li>Home</li>
          <li>Contact us</li>
          <li>FAQ</li>
        </ul>
      </div>		
		);
	}

}

export default Sidebar;