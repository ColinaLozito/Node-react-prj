import React, { Component } from 'react';
import { connect } from 'react-redux';

import HotelRow from './HotelRow';
import Filters from './Filters';

import { getHotels, filterByName, filterByStars} from '../actions/actionsIndex'

class Main extends Component {

	componentDidMount(){
		this.props.getHotels();
	}

	render(){
		return (
			<div className="contain col-md-12">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-lg-3">
							<div className="filters col-sm-12">
								<Filters {...this.props} />	
							</div>
					</div>

					<div className="col-xs-12 col-sm-12 col-lg-9">
			            <div className="hotels">
			            	<div className="hotels-container">
			            		
			            			<HotelRow {...this.props} />
	
			            	</div>                
			            </div>
					</div>
				</div>
			</div>
        );
	}

}

const mapStateToProps = state => ({
  data: state.hotels.data
})

const mapDispatchToProps = dispatch => ({
 getHotels: () => dispatch(getHotels()),
 filterByName: (hotelName) => dispatch(filterByName(hotelName)),
 filterByStars: (stars) => dispatch(filterByStars(stars))
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);