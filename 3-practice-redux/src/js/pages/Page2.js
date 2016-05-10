import React from "react";
import store from "../store";

export default class Page2 extends React.Component{
	constructor(){
		super();
		this.state = {
			hasUser: false
		}

	}

	componentWillMount(){
		console.log("componentWillMount");

		//获取最新的数据
		this.syncData(store.getState());

		this.unsubscribe = store.subscribe(this.subscribeChange.bind(this));
	}

	componentDidMount(){
		console.log("componentDidMount");
	}

	syncData(data){
		console.log('syncData',data);
		this.setState({
				hasUser: data.userReducer.users.length ? true : false
		});
	}

	subscribeChange(){
		this.syncData(store.getState());
	}

	componentWillUnmount(){
		console.log('unsubscribe');
		this.unsubscribe();
	}

	render(){
		const { params } = this.props;
		const { subpage } = params;
		const userStatus = this.state.hasUser?"has user":"no user";
		return <div>  Page 2 / subpage: {subpage}
					<div>user status</div>
					<h2>{userStatus}</h2>
				</div>;
	}

}