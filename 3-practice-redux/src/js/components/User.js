import React from "react";

export default class extends React.Component{

	render(){
		return <div>UserId:{this.props.uid}  UserName:{this.props.uname}</div>;
	}

}