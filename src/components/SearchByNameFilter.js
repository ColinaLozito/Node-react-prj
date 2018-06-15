import React, { Component } from 'react';

export default class SearchByNameFilter extends Component {

	constructor(props){
		super(props)
		this.state = {
			hotel_name: ''
		} 
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.filterByName(this.state.hotel_name)
	}

	handleHotelName(e){
		this.setState({hotel_name: e.target.value})
	}

	render(){
		return(
			<div className="search-by-name">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group filters-input">
					    <label className="col-sm-12 search-title">
					    	<strong><span className="search-icon"></span>Nombre del hotel</strong>
					    </label>
					    <div>
					    	<input type="search" className="form-control" name="search_Hotel" id="search_Hotel" onChange={this.handleHotelName.bind(this)} aria-describedby="search" placeholder="Ingrese el nombre del Hotel" />
					  		<button type="submit" className="btn btn-primary" >Buscar</button>
					    </div>
					</div>
				</form>
			</div>
		)
	}

}
