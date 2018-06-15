import React, { Component } from 'react';

import SearchByNameFilter from './SearchByNameFilter';
import FilterByStars from './FilterByStars';

export default class Filters extends Component {
		
	render(){
		return(
			<div>
				<div className="form-group filters-title col-sm-12" >
					<a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
						<h4><strong>Filtros</strong></h4>
						<img className="triangle-down-icon" alt="triangle" src="/icons/filters/triangle-down.png" />
					</a>
				</div>

				<div className="col-sm-12 collapse" id="collapseExample">
					<div className="row">

						<SearchByNameFilter {...this.props}/>

						<FilterByStars {...this.props}/>

					</div>
				</div>
			</div>
		)
	}
}
