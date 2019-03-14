/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:40:05
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-13 04:32:03
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import StoreLandingPage from "./pages/store-landing-page";

import "./App.scss";

class App extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<Switch>
					<Route path="/" exact component={StoreLandingPage} />
				</Switch>
			</Fragment>
		);
	}
}

export default withRouter(App);
