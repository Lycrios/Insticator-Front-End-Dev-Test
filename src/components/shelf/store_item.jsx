/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 02:42:47
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:56:22
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";
import AsyncImage from "../layout/async-image";

class ShelfItem extends Component {
	_isMounted = false;
	state = {
		item: { itemName: "", price: 0, imgSrc: "", quantityRemaining: 0 }
	};

	componentDidMount() {
		this._isMounted = true;

		if (this.props.hasOwnProperty("item") && typeof this.props.item === "object") {
			this.setState({
				item: this.props.item
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		if (
			this._isMounted &&
			nextProps.hasOwnProperty("item") &&
			typeof nextProps.item === "object" &&
			this.state.item !== nextProps.item
		) {
			this.setState({
				item: nextProps.item
			});
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		if (this.state.hasOwnProperty("item")) {
			let hasStock = this.state.item.hasOwnProperty("quantityRemaining") && this.state.item.quantityRemaining > 0;
			let stock_text =
				this.state.item.hasOwnProperty("quantityRemaining") &&
				(this.state.item.quantityRemaining === 0
					? "OUT OF STOCK"
					: this.state.item.quantityRemaining + " in Stock");

			return (
				<div data-item-id={this.state.item.id} className="shelf-item col-md-3 col-6">
					<div>
						{this.state.item.hasOwnProperty("imgSrc") ? (
							<AsyncImage
								title={this.state.item.itemName.replace(/\b[a-z]/g, function(letter) {
									return letter.toUpperCase();
								})}
								className="shelf-item-img"
								src={this.state.item.imgSrc}
							/>
						) : (
							<div />
						)}
						<div
							className="shelf-item-name"
							title={this.state.item.itemName.replace(/\b[a-z]/g, function(letter) {
								return letter.toUpperCase();
							})}
						>
							{this.state.item.itemName}
						</div>
						<div className={"shelf-item-price-stock" + (hasStock ? "" : " out-of-stock")}>
							<span className="shelf-item-price align-self-end">
								{this.state.hasOwnProperty("item") &&
									this.state.item.hasOwnProperty("price") &&
									"$" + parseFloat(this.state.item.price).toFixed(2)}
							</span>
							<span className="shelf-item-stock">{stock_text}</span>
						</div>
						<button
							onClick={() => {
								if (
									this.props.hasOwnProperty("addItemToCart") &&
									typeof this.props.addItemToCart === "function"
								)
									this.props.addItemToCart(this.state.item);
							}}
						>
							Add to Cart
						</button>
					</div>
				</div>
			);
		} else {
			return <div className="shelf-item col-md-3 col-6" />;
		}
	}
}

export default ShelfItem;
