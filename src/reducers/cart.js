/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:43:36
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:28:29
 * Copyright 2019 JumpButton North - All rights reserved.
 */

const addToCart = (state, payload) => {
	let nextState = [...state];
	let itemIndex = state.findIndex(i => i.id === payload.item.id);
	if (itemIndex >= 0) {
		nextState[itemIndex].quantity += 1;
		return nextState;
	}
	let newItem = { ...payload.item };
	newItem.quantity = 1;
	return [...nextState, newItem];
};

const removeFromCart = (state, payload) => {
	let itemIndex = state.findIndex(i => i.id === payload.item.id);
	let newState = [...state];
	newState.splice(itemIndex, 1);
	return newState;
};

const increaseQuantity = (state, payload) => {
	let nextState = [...state];
	let itemIndex = state.findIndex(i => i.id === payload.item.id);
	if (itemIndex >= 0) {
		nextState[itemIndex].quantity += 1;
		return nextState;
	}
	return state;
};

const descreaseQuantity = (state, payload) => {
	let nextState = [...state];
	let itemIndex = state.findIndex(i => i.id === payload.item.id);
	if (itemIndex >= 0) {
		nextState[itemIndex].quantity -= 1;
		if (nextState[itemIndex].quantity === 0) {
			nextState.splice(itemIndex, 1);
		}
		return nextState;
	}
	return state;
};

const clearCart = (state, payload) => {
	let nextState = [...state];
	nextState.splice(0, nextState.length);
	return nextState;
};

const confirmPurchase = (state, payload) => {
	let nextState = [...state];
	nextState.splice(0, nextState.length);
	if (typeof payload.callback === "function") payload.callback();
	return nextState;
};

export default (state = [], payload) => {
	switch (payload.type) {
		case "add":
			return addToCart(state, payload);
		case "remove":
			return removeFromCart(state, payload);
		case "addQty":
			return increaseQuantity(state, payload);
		case "decQty":
			return descreaseQuantity(state, payload);
		case "clrCrt":
			return clearCart(state, payload);
		case "cnfPrc":
			return confirmPurchase(state, payload);
		default:
			return state;
	}
};
