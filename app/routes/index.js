const hotelRoutes = require('./hotel_routes');
const appRoutes = require('./app_routes');

module.exports = function(app, db){
	hotelRoutes(app,db);
	appRoutes(app);
}