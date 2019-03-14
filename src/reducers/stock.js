/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 02:15:08
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:38:20
 * Copyright 2019 JumpButton North - All rights reserved.
 */

const updateQuantity = (state, payload) => {
	let nextState = [...state];
	let itemIndex = nextState.findIndex(i => i.id === payload.item.id);

	if (itemIndex >= 0) {
		nextState[itemIndex].quantityRemaining -= payload.item.quantity;
	}

	return nextState;
};

export default (state = [], payload) => {
	switch (payload.type) {
		case "updQty":
			return updateQuantity(state, payload);
		default:
			return state;
	}
};
