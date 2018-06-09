import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HotelRow extends React.Component {

	handleStars(stars){
		var indents = [];
		for (var i = 0; i < stars; i++) {
		  indents.push(
		  	<img key={i} src="/icons/star.png" className='star' />
		 );
		}
		return (
		   <div className="star-container">{indents}</div>
		);
	}

	hotelAmenities(amenities){
		return amenities.map((amn, pos)=>{
			return (
				<img key={pos} className="amenities-icon" src={'icons/amenities/'+amn+".svg"} />
			)
		})
	}

	hotelsRows(){
		//console.log(this.props.data)
		return this.props.data.map((hotel, pos)=>{
			return(
				<div key={pos}>
					<div className="col-md-12 hotel">
						<div className="row">
							<div className="col-sm-12 col-lg-4">
								<div className="row">
									<div className="col-md-12 hotel-image-frame">
										<img className="hotel-img" src={'./images/hotels/'+hotel.image}/>
									</div>
								</div>
							</div>

							<div className="col-sm-12 col-lg-4">
								<div className="row">
									<div className="col-sm-12 hotel-name">
										<h3>{hotel.name}</h3>
									</div>
									<div className="col-sm-12 hotel-stars">
										{this.handleStars(hotel.stars)}
									</div>
									<div className="col-sm-12 hotel-amenities">
										{this.hotelAmenities(hotel.amenities)}						
									</div>

									<div className="col-sm-12 underline"></div>

								</div>
							</div>

							<div className="col-sm-12 col-lg-4 col-price">
								<div className="row">
									
									<div className="col-sm-12 price-text">
										<h4>Precio por noche por habitacion</h4>
									</div>
									<div className="col-sm-12 hotel-price">
										<h3>ARS <strong>{hotel.price}</strong></h3>						
									</div>
									<div className="col-sm-12 hotel-button">
										<a href={'/api/hotels/'+hotel.id}><button className="btn btn-primary btn-block"><p>Ver Hotel</p></button></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}	

	render () {
		return (
			<div>
				{this.hotelsRows()}
			</div>
		)
	}
}