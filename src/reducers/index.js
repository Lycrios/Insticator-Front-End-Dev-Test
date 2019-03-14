/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:45:03
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-13 02:17:54
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import cart from "./cart";
import stock from "./stock";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	cart,
	stock
});

export default rootReducer;
