import React from "react";
import User from "../components/User";
import {getUsers} from "../api/user";

export default class Page3 extends React.Component{

	constructor(){
		super();

		this.state = {
			users : []
		}
		console.log('initial data');
	}

	componentWillMount(){
		var _this = this;
		var result = getUsers().then(function(response){

			console.log('response succ',response)
			_this.setState({
				users: response.data.users
			})
		}).catch(function(err){
			console.log('response err',err);
		});

		console.log('result',result);
	}

	render(){
		return <div>Page 3
					<div>-- users ---</div>
					<div>
						{this.state.users.map(function(user,i){
							return (
								<User key={i} uid={user.id} uname={user.name} />
							);
						})}
					</div>
				</div>;
	}

}