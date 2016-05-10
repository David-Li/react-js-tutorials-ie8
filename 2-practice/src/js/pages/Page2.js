import React from "react";

export default class Page2 extends React.Component{
	render(){
		const { params } = this.props;
		const { subpage } = params;
		return <div>  Page 2 / subpage: {subpage}</div>;
	}

}