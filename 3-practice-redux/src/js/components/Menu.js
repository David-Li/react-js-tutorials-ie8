import React from "react";
import {IndexLink,Link} from "react-router";

export default class Menu extends React.Component {

	clickMenu(e){
		console.log(e.target);
	}

	render(){

		return	<div>
					<div>
						<IndexLink to="/" onClick={this.clickMenu.bind(this)}>First</IndexLink>
					</div>
					<div>
						<Link to="/second" onClick={this.clickMenu.bind(this)}>Second</Link>
					</div>
					<div>
						<Link to="/third"  onClick={this.clickMenu.bind(this)}>third</Link>
					</div>
				</div>;
	}
}