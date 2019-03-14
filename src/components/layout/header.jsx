/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 03:59:53
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-13 04:01:30
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header className="page-splitter">
				<div className="container">
					<div className="row">
						<div className="col-12 pt-5">
							<h1 className="tab">Fruit</h1>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
