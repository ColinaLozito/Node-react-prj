import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import HotelRow from '../../src/components/HotelRow.jsx'

export default class App extends React.Component {

	constructor(){
		super();
		this.starfilter = []
		this.state = {
			data: [],
			url: 'api/hotels',
			hotel_name: '',
			stars_filter: []
		}
	}

	componentDidMount(){
		this.fetchHotels()
	}

	fetchHotels(){

		let $this = this
		axios.get(this.state.url).then(response => {
			$this.setState({
				data: response.data
			})
		}).catch(error => {
			console.log(error)
		})
		
	}

	handleSubmit(e){
		e.preventDefault();
		axios.get(this.state.url+"/"+this.state.hotel_name).then(response => {
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
		})
	}


	handleHotelName(e){
		this.setState({hotel_name: e.target.value});
	}

	handleCheckFilter(e){

		let array = this.starfilter;
		let val = e.target.value
		let value = parseInt(val)
		let position = array.indexOf(value)
		
		if (array.includes(value)) {
			array.splice(position, 1)
			console.log(array)
			if (array.length === 0) {
				this.fetchHotels()
			}
			this.handleFilterSubmit()
		}else{
			array.push(parseInt(value))
			console.log(array)
			if (array.length === 0) {
				this.fetchHotels()
			}
			this.handleFilterSubmit()
		}
	}

	handleFilterSubmit(){
		var self = this; //----the script I have to add
		let data = self.starfilter
		console.log(data)
		axios.post('api/starsfilter', {data}).then(response => {
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
		})


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
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-lg-3">
					<div className="filters col-sm-12">
						<div>
							<div className="form-group filters-title col-sm-12" >
								<a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
									<h4><strong>Filtros</strong></h4>
									<img className="triangle-down-icon" src="/icons/filters/triangle-down.png"></img>
								</a>
							</div>
							<div className="col-sm-12 collapse" id="collapseExample">
								<div className="row">
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
									<div className="form-control filters-stars">
										<div className="col-md-12 star-title">
											<strong><span className="star-icon"></span>Estrellas</strong>
										</div>
										<div className="filters-options">
											<form onSubmit={this.handleFilterSubmit.bind(this)}>
												<div className="checkbox all-stars">
													<button className="btn btn-default" onClick={this.fetchHotels.bind(this)} >Todas las Estrellas</button>
												</div>
												{this.starsCheck()}
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-xs-12 col-sm-12 col-lg-9">
		            <div className="hotels">
		            	<div className="">
		            		<div className="">
		            			{this.state.data.map((hotel, i) => (
									<div>
										<HotelRow key={i} i={i} hotel={hotel} object={this}/>                    			
										
									</div>
								))}
		            		</div>
		            	</div>                
		            </div>
				</div>
			</div>
        );
	}
}


if (document.getElementById('app')) {
	ReactDOM.render(<App/>, document.getElementById('app') )
}