import React from "react";
import Label from "./Input/Label";


class HelloWorld extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			defaultTxt : "Welcome"
		};
	}
	handleChange(e){
		this.setState({
			defaultTxt : e.target.value
		})
	}
	render() {
		return <div>
				<Label txt={this.state.defaultTxt} />
				<input  value={this.state.defaultTxt} onChange={this.handleChange.bind(this)} />
				</div>;
	}
}

export default HelloWorld;