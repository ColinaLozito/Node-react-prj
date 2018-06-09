import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FilterByStars extends React.Component {

	constructor(props){
		super(props);
		this.starfilter = []
		this.state = {
		}
	}

	fetchHotels(){
		this.props.getHotels()
	}

	handleCheckFilter(e){

		let array = this.starfilter;
		let val = e.target.value
		let value = parseInt(val)
		let position = array.indexOf(value)
		
		if (array.includes(value)) {
			array.splice(position, 1)
			//console.log(array)
			if (array.length === 0) {
				this.fetchHotels()
			}
			this.handleFilterSubmit()
		}else{
			array.push(parseInt(value))

			if (array.length === 0) {
				this.fetchHotels()
			}
			this.handleFilterSubmit()
		}
	}

	handleFilterSubmit(){
		var self = this; //----the script I have to add
		let data = Object.values(self.starfilter)
		this.props.filterByStars(data)
		/*axios.post('api/starsfilter', {data}).then(response => {
			console.log(response.data)
			if (response.data.lengh >= 1) {
				this.setState({
					data: [response.data]
				})
				
			}else {
				this.setState({
					data: response.data
				})
			}
		}).catch(error => {
			console.log(error)
		})*/


	}

	starsCheck(){
		var stars = [];
		for (var i = 5; i > 0; i--) {
		  stars.push(
		  	<div className="checkbox" key={i}>
		  		<label><input type="checkbox" value={i} name={i+'stars'} onChange={this.handleCheckFilter.bind(this)} />{this.filterStars(i)}</label>
		  	</div>
		 );
		}
		return (
		   <div>
		    {stars}
		   </div>
		);
	}


	filterStars(stars){

		var indents = [];
		for (var i = 0; i < stars; i++) {
		  indents.push(
		  	<img src="/icons/star.png" className='star' key={i}/>
		 );
		}
		return (
		   <div className="star-container">
		    {indents}
		   </div>
		);
	}

	render(){
		return(
			<div className="form-control filters-stars">
				<div className="col-md-12 star-title">
					<strong><span className="star-icon"></span>Estrellas</strong>
				</div>
				<div className="filters-options">
					<form>
						<div className="checkbox all-stars">
							<a className="btn btn-default" onClick={this.fetchHotels.bind(this)} >Todas las Estrellas</a>
						</div>
						{this.starsCheck()}
					</form>
				</div>
			</div>
		)
	}

}