import axios from 'axios'

const apiServer = 'http://localhost:8000'

export const getHotels = () => dispatch => {
	axios.get(apiServer+'/api/hotels').then(response => {
		dispatch({
			type: 'GET_HOTELS',
			payload: response.data
		})
	}).catch(error => {
		console.log(error)
	})
}


export const getSingleHotel = (postId) => dispatch => {
	axios.get(apiServer+'/api/hotels/'+postId).then(response => {
		dispatch({
			type: 'GET_SINGLE_HOTEL',
			payload: response.data
		})
	}).catch(error => {
		console.log(error)
	})
}


export const filterByName = (hotelName) => dispatch => {
	axios.get(apiServer+'/api/hotels/'+hotelName).then(response => {
		dispatch({
			type: 'FILTER_BY_NAME',
			payload: response.data
		})
	}).catch(error => {
		console.log(error)
	})
}

export const filterByStars = (stars) => dispatch => {
	console.log(stars)
	axios.post(apiServer+'/api/starsfilter', {str: stars}).then(response => {
		dispatch({
			type: 'FILTER_BY_STARS',
			payload: response.data
		})
		
	}).catch(error => {
		console.log(error)
	})
}



