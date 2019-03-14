/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 02:25:44
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 11:33:53
 * Copyright 2019 JumpButton North - All rights reserved.
 */

export const updateQuantity = item => {
	return {
		type: "updQty",
		item
	};
};
