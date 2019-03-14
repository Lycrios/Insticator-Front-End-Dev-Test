/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 01:28:33
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-13 04:37:15
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";
import Shelf from "../components/shelf/index";
import Cart from "../components/cart/index";
import Header from "../components/layout/header";

class StoreLandingPage extends Component {
	state = {};
	render() {
		return (
			<div id="store-landing-page" className="full-page-height">
				<Header />
				<div className="container" id="page-content">
					<div className="row h-100">
						<div className="col-md-9">
							<Shelf />
						</div>
						<div className="col-md-3 bg-base">
							<Cart />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StoreLandingPage;
