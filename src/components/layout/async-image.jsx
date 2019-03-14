/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 04:13:25
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 09:23:01
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";

class AsyncImage extends Component {
	_isMounted = false;
	state = {
		loading: true,
		loaded: false,
		error: false,
		src: null
	};

	componentDidMount() {
		this._isMounted = true;

		this.startAsyncLoad(this.props);
	}

	startAsyncLoad(props) {
		if (this._isMounted && this.props.hasOwnProperty("src")) {
			const image = new Image();
			const self = this;

			if (!(props.src.trim() === "" || props.src.trim() === "/")) {
				image.onerror = function(e) {
					if (self._isMounted)
						self.setState({
							loaded: true,
							error: true,
							src: null,
							loading: false
						});
				};

				image.onload = function(e) {
					if (self._isMounted)
						self.setState({
							loaded: true,
							error: false,
							src: image.src,
							loading: false
						});
				};

				image.onloadstart = function() {
					if (self._isMounted)
						self.setState({
							loading: true,
							src: null,
							loaded: false,
							error: false
						});
				};

				this.setState({
					loading: true
				});

				image.src = props.src;
			}
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.src !== this.state.src) {
			this.startAsyncLoad(nextProps);
		}
	}
	render() {
		let classes = ["async-img-loader"];

		if (this.state.loading) classes.push("loading");
		if (this.state.loaded) classes.push("loaded");
		if (this.state.error) classes.push("error");
		if (this.props.hasOwnProperty("className")) classes.push(...this.props.className.split(" "));
		return (
			<div
				className={classes.join(" ")}
				title={this.props.hasOwnProperty("title") ? this.props.title : ""}
				style={this.state.src === null ? {} : { backgroundImage: "url('" + this.state.src + "')" }}
			/>
		);
	}
}

export default AsyncImage;
