import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/header.css';
import Sidebar from './sidebar.jsx';

class SiteHeader extends Component {
	constructor(props) {
		super(props);
		this.showSideBar = this.showSideBar.bind(this);
		this.state = {
			isSidebar: false
		};
	}

	// const animateHamburger = () => {
	// 	e.target.className
	// };

	showSideBar(e) {
		this.setState(prevState => ({
			isSidebar: !prevState.isSidebar
		}));

		// for animating hamburger icon
		document.querySelector('.hamburger-icon').classList.toggle("active");
		
	}
	render() {
		return (
			<div className="site-header">
				<ReactCSSTransitionGroup component="div" transitionName="slide" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
					{this.state.isSidebar && <Sidebar />}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup component="div" transitionName="fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
					{ this.state.isSidebar && <div className="free-space d-ib" onClick={this.showSideBar}></div> }
				</ReactCSSTransitionGroup>

				<div className="hamburger-icon" onClick={this.showSideBar}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>

				<p className="brand-name">MyApp</p>

			</div>
		);
	}
}

export default SiteHeader;