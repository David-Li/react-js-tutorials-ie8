import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./pages/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const appElement = document.getElementById("app");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Page1}></IndexRoute>
			<Route path="second(/:subpage)"  component={Page2} ></Route>
			<Route path="third" component={Page3} ></Route>
		</Route>
	</Router>,
app
);
