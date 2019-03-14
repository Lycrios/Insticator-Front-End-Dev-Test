/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:50:45
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:40:37
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import swal from "sweetalert2";
import * as CartActions from "../../actions/cart_actions";
import * as StockActions from "../../actions/stock_actions";
import ShelfItem from "./store_item";

class Shelf extends Component {
	_isMounted = false;
	state = {
		stock: []
	};

	componentDidMount() {
		this._isMounted = true;

		if (this.props.hasOwnProperty("stock"))
			this.setState({
				stock:
					this.props.hasOwnProperty("stock") && typeof this.props.stock === "object" ? this.props.stock : []
			});
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.stock !== nextProps.stock && typeof nextProps.stock === "object") {
			this.setState({
				stock: nextProps.stock
			});
		}
	}

	addItemToCartHandler(item) {
		if (item.quantityRemaining <= 0) {
			swal.fire({
				title: "We Have None Left",
				text: "Our apologize but we're currently out of stock of that item.",
				type: "warning"
			});
		} else {
			let cartIndex = this.props.cart.findIndex(i => i.id === item.id);
			if (cartIndex >= 0) {
				if (this.props.cart[cartIndex].quantity + 1 > item.quantityRemaining) {
					swal
						.fire({
							title: "Not Enough Of That Item",
							text: "We're sorry but there isn't enough quantity remaining to add another to your cart..",
							type: "warning"
						})
						.then(v => {});
				} else {
					this.handleCartItem(item);
				}
			} else {
				this.handleCartItem(item);
			}
		}
	}

	handleCartItem(item) {
		this.props.cartActions.addToCart(item);
	}

	render() {
		return (
			<div className="shelf-items row">
				{this.state.hasOwnProperty("stock") &&
					this.state.stock.map((item, key) => (
						<ShelfItem key={key} item={item} addItemToCart={this.addItemToCartHandler.bind(this)} />
					))}
			</div>
		);
	}
}

function mapStateToProps(state, prop) {
	return {
		stock: state.stock,
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(StockActions, dispatch),
		cartActions: bindActionCreators(CartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
