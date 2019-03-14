/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:49:14
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:29:17
 * Copyright 2019 JumpButton North - All rights reserved.
 */

export const addToCart = item => {
	return {
		type: "add",
		item
	};
};

export const removeFromCart = item => {
	return {
		type: "remove",
		item
	};
};

export const increaseQuantity = item => {
	return {
		type: "addQty",
		item
	};
};

export const decreaseQuantity = item => {
	return {
		type: "decQty",
		item
	};
};

export const clearCart = () => {
	return {
		type: "clrCrt"
	};
};

export const confirmPurchase = callback => {
	return {
		type: "cnfPrc",
		callback
	};
};
