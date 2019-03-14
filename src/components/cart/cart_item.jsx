/*
 * @Author: Matthew Auld
 * @Date: 2019-03-14 02:04:51
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 10:50:37
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React, { Component } from "react";
import AsyncImage from "../layout/async-image";

class CartItem extends Component {
	state = {};
	render() {
		return (
			<li className="cart-item">
				<div className="row">
					<div className="col-md-4 px-0">
						<AsyncImage
							className="item-image inverted"
							item={this.props.item}
							src={this.props.item.imgSrc}
							stripeWhite={true}
						/>
					</div>
					<div className="col-md-4 d-flex align-items-center justify-content-center px-0">
						<div className="item-quantity-tools">
							<button
								onClick={() => {
									if (
										this.props.hasOwnProperty("decreaseQuantity") &&
										typeof this.props.decreaseQuantity === "function"
									)
										this.props.decreaseQuantity(this.props.item);
								}}
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fal"
									data-icon="minus"
									className="svg-inline--fa fa-minus fa-w-12"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
									/>
								</svg>
							</button>
							<span>{this.props.item.quantity}</span>
							<button
								onClick={() => {
									if (
										this.props.hasOwnProperty("increaseQuantity") &&
										typeof this.props.increaseQuantity === "function"
									)
										this.props.increaseQuantity(this.props.item);
								}}
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fal"
									data-icon="plus"
									className="svg-inline--fa fa-plus fa-w-12"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path
										fill="currentColor"
										d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="col-md-4" />
				</div>
				<div className="row">
					<div className="col-md-12 cart-item-tools">
						<div>
							@{" "}
							<span>
								${this.props.item.price.toFixed(2)}each = ${(this.props.item.quantity * this.props.item.price).toFixed(2)}
							</span>
						</div>
						<button
							onClick={() => {
								this.props.onRemove(this.props.item);
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</li>
		);
	}
}

export default CartItem;
