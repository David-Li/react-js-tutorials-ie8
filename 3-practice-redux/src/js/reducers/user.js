var userInitialState = {
	users: []
};

export default function(state = userInitialState, action){
	switch( action.type ){

		case "GET_USERS":
			// console.log('typeof Object',typeof(Object));
			// console.log('typeof Object.assign',typeof(Object.assign));
			// console.log('typeof {}',typeof({}));
			var newState = Object.assign({},state);
			newState.users = action.users;
			return newState;
			// return state;

		default :
		
			return state;
	}
}