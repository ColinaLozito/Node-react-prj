import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSingleHotel } from '../actions/actionsIndex'

class SingleHotel extends Component {

	componentWillMount(){
		const  postId = this.props.match.params.postID;
		console.log(__dirname)
		this.props.getSingleHotel(postId)
	}

	render(){
		return(
			<div className="container">
				<div className="single-hotel-container">
					<div className="row">
						<div className="col-md-12">
							<div className="single-img-container">
								<img alt={this.props.data.image} src={'../images/hotels/'+this.props.data.image}/>
							</div>
						</div>
						<div className="col-md-12">
							<div className="single-hotel-info row">
								<div className="col-lg-4">
									<div className="hotel-name">
										<h3>{this.props.data.name}</h3>
									</div>
									<div className="hotel-description">
										<h4>Info</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis quam, 
											enim nulla lacinia hac dis nostra duis augue parturient ultricies, 
											pellentesque tortor taciti dapibus platea praesent venenatis etiam. 
											Facilisi mollis quis vivamus pharetra nunc ultrices class in commodo fames, 
											litora leo penatibus tellus lobortis consequat mauris euismod praesent ornare, 
											aliquet suspendisse senectus tempus imperdiet integer molestie sollicitudin etiam. 
											A volutpat aliquet sagittis posuere nisl tincidunt et tortor, 
											cursus taciti donec senectus aenean per sociis mus, 
											semper nascetur commodo urna odio iaculis sem, 
											dignissim tempus diam praesent hac conubia cras.
										</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="stars">
									<h3>
										STARS
									</h3>
										{this.props.data.stars}
									</div>
									<div className="amanities">
										<pre>
											{this.props.data.amenities}
										</pre>
									</div>
								</div>
								<div className="col-lg-4">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

const mapStateToProps = state => ({
  data: state.hotels.data
})

const mapDispatchToProps = dispatch => ({
 getSingleHotel: (id) => dispatch(getSingleHotel(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SingleHotel);