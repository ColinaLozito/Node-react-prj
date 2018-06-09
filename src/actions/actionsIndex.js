import axios from 'axios'

export const getHotels = () => dispatch => {
	axios.get('api/hotels').then(response => {
		dispatch({
			type: 'GET_HOTELS',
			payload: response.data
		})
	}).catch(error => {
		console.log(error)
	})
}

export const filterByName = (hotelName) => dispatch => {
	axios.get('/api/hotels/'+hotelName).then(response => {
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
	axios.post('/api/starsfilter', {str: stars}).then(response => {
		dispatch({
			type: 'FILTER_BY_STARS',
			payload: response.data
		})
		
	}).catch(error => {
		console.log(error)
	})
}



