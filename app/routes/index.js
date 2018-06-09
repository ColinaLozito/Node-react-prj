const hotelRoutes = require('./hotel_routes');

module.exports = function(app, db){
	hotelRoutes(app,db);

}