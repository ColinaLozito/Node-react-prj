const initialState = {
	data: []
}


export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTELS':
			return Object.assign({}, state, {data: action.payload})
		case 'FILTER_BY_NAME':
			return Object.assign({}, state, {data: action.payload})
		case 'FILTER_BY_STARS':
			return Object.assign({}, state, {data: action.payload})
		default:
			return state
	}
}