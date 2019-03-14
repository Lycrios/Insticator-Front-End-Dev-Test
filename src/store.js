/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:39:41
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-13 00:44:35
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import { createStore } from "redux";
import rootReducer from "./reducers";

export default initialState => {
	return createStore(rootReducer, initialState);
};
