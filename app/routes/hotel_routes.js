//var ObjectID = require('mongodb').ObjectID;


module.exports = function(app, db) {
	const coll = db.collection('hotels');
	const fs = require('fs');
	// get all items
	app.get('/api/hotels/', (req, res) => {


		coll.find({}).toArray(function (err,result) {
			if(err){
			res.send(err);
			}
			else{

			res.send(result);
			}
        })
	})


	// get specific item
	app.get('/api/hotels/:id', (req, res) => {

		let id = req.params.id;
		let idNum = parseInt(id);

		if (Number.isInteger(idNum)){
			coll.findOne({ "id":id }, (err, item) =>{
				if (err) {
					res.send({'error': 'A error has occured'})
				} else {
					res.send(item)
				}
			});
		} else {
			coll.find({"name": { $regex: id}}).toArray(function (err,result) {
				if(err){
				res.send(err);
				}
				else{

				res.send(result);
				}
	        })
			
		}
	})

	app.post('/api/starsfilter', (req, res) => {

		let data = req.body.str;
		
		coll.find({"stars": { $in: data } }).toArray(function (err,result) {
			if(err){
				res.send(err);
			}
			else{
				res.send(result);
			}
        })
	})


	app.delete('/api/hotels/:id', (req, res) => {

		const id = parseInt(req.params.id);
		coll.remove({ "id":id }, (err, item) =>{
			if (err) {
				res.send({'error': 'A error has occured'})
			} else {
				res.send('Hotel ID num: '+id+' was deleted')	
			}
		});
	})



	app.put('/api/hotels/:id', (req, res) => {

		const id = parseInt(req.params.id);
		const hotel = {
			id: Date.now(),
    		name: req.body.name,
    		stars: req.body.stars,
    		price: req.body.price,
    		image: 'generic.jpg',
    		amenities: ['test']
    	}

		coll.update({ "id":id }, hotel, (err, item) =>{
			if (err) {
				res.send({'error': 'A error has occured'})
			} else {
				res.send(item)
			}
		});
	})



	app.post('/api/hotels', (req, res) => {
		const hotel = {
			id: Date.now(),
    		name: req.body.name,
    		stars: req.body.stars,
    		price: req.body.price,
    		image: 'generic.jpg',
    		amenities: ['test']
    	}

		coll.insert(hotel, (err, result) => {
			if (err) {
				res.send({'error': 'A error has occured'})
			} else {
				res.send(result.ops[0])
			}
		});

	})







	app.post('/api/backupdb', (req, res) => {

		var obj = [];

		coll.find({}).toArray(function (err,result) {
			if(err){
				res.send(err);
			}
			else{
				obj.push(result);
				var json = JSON.stringify(obj);
				fs.writeFile('db_backup/collBackup-'+Date.now()+'.json', json, 'utf8');
				console.log('Collection Backup')
			}
        })



	})


	// Drop and populate the collection DB
	app.post('/api/populatedb', (req, res) => {

		coll.drop(function(err, delOK) {
			if (err) throw err;
			if (delOK) console.log("Collection deleted");
			db.close();
		});

		fs.readFile('./app/routes/data.json', 'utf8', function (err, data) {
		 	if (err) throw err;
		 	var obj = JSON.parse(data);
		 	obj.map(function(item, pos){
		 		coll.insert(item, (err, result) => {
					if (err) {
						console.log({'error': 'A error has occured'})
					} else {
						console.log(result)
					}
				}); 
		 	})
		 	res.end();
		});
	})

}