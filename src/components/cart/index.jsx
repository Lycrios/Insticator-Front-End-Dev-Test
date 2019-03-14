/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 01:51:32
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:43:02
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CartActions from "../../actions/cart_actions";
import * as StockActions from "../../actions/stock_actions";
import CartItem from "./cart_item";
import Swal from "sweetalert2";

class CartComponent extends Component {
	state = {};

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value) {
			alert(prevProps.value);
		}
	}

	render() {
		let cartTotalValue = 0;

		this.props.cart.forEach(item => {
			cartTotalValue += item.quantity * item.price;
		});

		return (
			<div className="cart-component">
				<div className="text-center">
					<h3>Shopping Cart</h3>
					<span className="cart-item-count">
						{this.props.hasOwnProperty("cart") && this.props.cart.length === 0
							? "Cart is Empty"
							: this.props.cart.length === 1 ? "1 item" : this.props.cart.length + " items"}
					</span>
					<ul className="cart-inventory">
						{this.props.hasOwnProperty("cart") &&
							this.props.cart.map((item, key) => (
								<CartItem
									item={item}
									key={item.id}
									onRemove={() => {
										Swal.fire({
											title: "Remove from Cart",
											text: "Are you sure you want to remove that item from your cart?",
											type: "question",
											showCancelButton: true,
											cancelButtonText: "No",
											confirmButtonText: "Yes"
										}).then(v => {
											if (v.hasOwnProperty("value") && v.value) {
												this.props.action.removeFromCart(item);
											}
										});
									}}
									increaseQuantity={() => {
										let cartIndex = this.props.cart.findIndex(i => i.id === item.id);
										if (cartIndex >= 0) {
											if (this.props.cart[cartIndex].quantity + 1 > item.quantityRemaining) {
												Swal.fire({
													title: "Not Enough Of That Item",
													text:
														"We're sorry but there isn't enough quantity remaining to add another to your cart..",
													type: "warning"
												});
											} else {
												this.props.action.increaseQuantity(item);
											}
										}
									}}
									decreaseQuantity={() => {
										if (item.quantity - 1 === 0) {
											Swal.fire({
												title: "Remove from Cart",
												text: "Are you sure you want to remove that item from your cart?",
												type: "question",
												showCancelButton: true,
												cancelButtonText: "No",
												confirmButtonText: "Yes"
											}).then(v => {
												if (v.hasOwnProperty("value") && v.value) {
													this.props.action.decreaseQuantity(item);
												}
											});
										} else {
											this.props.action.decreaseQuantity(item);
										}
									}}
								/>
							))}
					</ul>
					<div className="cart-total">Total: ${cartTotalValue.toFixed(2)}</div>
					<div className="clear-cart">
						<button
							onClick={() => {
								if (this.props.cart.length === 0) {
									Swal.fire({
										title: "Nothing to Remove",
										text: "There was nothing to remove from your cart.",
										type: "error"
									});
								} else {
									Swal.fire({
										title: "Clear your cart?",
										text: "Are you sure you want to clear your cart?",
										type: "question",
										confirmButtonText: "Yes",
										showCancelButton: true,
										cancelButtonText: "No"
									}).then(v => {
										if (v.hasOwnProperty("value") && v) {
											this.props.action.clearCart();
										}
									});
								}
							}}
						>
							Empty Cart
						</button>
					</div>
					<div className="confirmButton">
						<button
							onClick={() => {
								if (this.props.cart.length > 0) {
									this.props.cart.forEach(item => {
										this.props.stockActions.updateQuantity(item);
									});

									this.props.action.confirmPurchase(async () => {
										Swal.fire({
											title: "Thank You for Your Purchase",
											text: 'Your order for some "Fresh Insticator Fruit" has been placed.',
											type: "success"
										});
									});
								} else
									Swal.fire({
										title: "Your cart is empty",
										text: "Sorry but you can submit an order with nothing in your cart.",
										type: "info"
									});
							}}
						>
							Confirm Purchase
						</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, prop) {
	return {
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(CartActions, dispatch),
		stockActions: bindActionCreators(StockActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
