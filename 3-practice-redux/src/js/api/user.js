import axios from "axios";
import store from "../store";

export function getUsers(){

	// return axios.get('/users.json');

	return axios.get('/users.json').then(function(response){
		console.log('succ',response);
		store.dispatch({
			type:'GET_USERS',
			users: response.data.users
		});
		return response;
	}).catch(function(err){
		console.log(err);
	});
}