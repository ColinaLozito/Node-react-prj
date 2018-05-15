# Node-react-prj
This is my fisrt project maded with MongoDb, Express, React.js and Node.js, axios to make RESTfull requests and Webpack to compilate all code in a simple JavaScript file

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things you need to install the software and how to install them:
- Have Node.js installed

### Installing
1- In the server tool project folder copy the git repository
```
git clone 'repository-address'
```
2- In the root folder of the project run the commands to update and install all npm dependencies:
```
npm install
``` 
3- Then run the next commnad to load the Server:
```
npm run dev
```
4- Open the web explorer and access to the local host:
```
http://localhost:8000/
```


### Features
This is a Backend and Frontend project

In the Backend i used Node.js, Express.js framework and a free MongoDb server
Also i made a RESTfull API only to access in the Backend with some RESTfull tools like POSTMAN

For access and make the data tu persist i used a free MongoDB server 

The URLs of the REST API are

- To get all data
```
app.get('/api/hotels/'... => http://localhost:8000/api/hotels
```
- To get a data by Name or By ID number
```
app.get('/api/hotels/:id'... => http://localhost:8000/api/hotels/....
```
- To delete an item by ID
```
app.delete('/api/hotels/:id'... => http://localhost:8000/api/hotels/...
```
- To update an item
```
app.put('/api/hotels/:id'... => http://localhost:8000/api/hotels/...
```
- To create an item
```
app.post('/api/hotels'... => http://localhost:8000/api/hotels/...
```
- To filster by reputation Stars
```
app.post('/api/starsfilter'... => http://localhost:8000/api/starsfilter
```


EXTRAS:

- If you want to backup the DB in a JSON file you can access to
```
app.post('/api/backupdb'... => http://localhost:8000/api/backupdb
```	
- If you want to rollback and mount the original data again you can access to
```
app.post('/api/populatedb'... => http://localhost:8000/api/populatedb
```	


As Frontend i Used React.Js to make the view system, "axios" library to make the resquest and "Bootstrap" with "Sass" to make the views in an organized way and fast. 

This project was maded also with responsive design

In this proect you can watch and load a Hotels in a list, also yo can find an Hotel by name or filter by reputation stars


## License

This project is licensed under the MIT License