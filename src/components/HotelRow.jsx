import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

export default class HotelRow extends React.Component {

	handleStars(stars){

		var indents = [];
		for (var i = 0; i < stars; i++) {
		  indents.push(
		  	<img key={i} src="/icons/star.png" className='star' />
		 );
		}
		
		return (
		   <div className="star-container">
		    {indents}
		   </div>
		);
	}	

	render () {
		return (
			<div key={this.props.i}>
				<div className="col-md-12 hotel">
					<div className="row">
						<div className="col-sm-12 col-lg-4">
							<div className="row">
								<div className="col-md-12 hotel-image-frame">
									<img className="hotel-img" src={'./images/hotels/'+this.props.hotel.image}/>
								</div>
							</div>
						</div>

						<div className="col-sm-12 col-lg-4">
							<div className="row">
								<div className="col-sm-12 hotel-name">
									<h3>{this.props.hotel.name}</h3>
								</div>
								<div className="col-sm-12 hotel-stars">
									<div>{
										this.handleStars(this.props.hotel.stars)
									}</div>
								</div>
								<div className="col-sm-12 hotel-amenities">
									{
										this.props.hotel.amenities.map(function(amn, i){
											return(
												<img className="amenities-icon" src={'icons/amenities/'+amn+".svg"} />
											)
										})
									}						
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
									<h3>ARS <strong>{this.props.hotel.price}</strong></h3>						
								</div>
								<div className="col-sm-12 hotel-button">
									<a href={'/api/hotels/'+this.props.hotel.id}><button className="btn btn-primary btn-block"><p>Ver Hotel</p></button></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}