/*
 * @Author: Matthew Auld
 * @Date: 2019-03-13 00:39:54
 * @Last Modified by: Matthew Auld
 * @Last Modified time: 2019-03-14 04:03:02
 * Copyright 2019 JumpButton North - All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "animate.css/animate.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import md5 from "js-md5";

const stock = require("./store_items.json");

// Generate UniqueIDs for each item (Similar to how a database would have an id)
stock.forEach(item => {
	item.id = md5(item.itemName + Math.floor(Math.random() * Math.floor(2019)));
});

ReactDOM.render(
	<BrowserRouter>
		<Provider store={Store({ stock })}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
