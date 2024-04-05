const express = require('express')
const app = express()
const {SequelizeConnection} = require('./model/connection.js');
const {RouteController} = require('./controller/routeController.js');
app.use(express.json());

const sequelizeCon = new SequelizeConnection(); 
const myRoutes = new RouteController(sequelizeCon.seque);

app.get('/api/foods',myRoutes.findAll);
app.get('/api/foods/:id',myRoutes.findById);
app.post('/api/foods',myRoutes.createFood);
app.put('/api/foods/:id',myRoutes.updateFood);
app.delete('/api/foods/:id',myRoutes.deleteFood);

app.listen(5000,()=>{console.log("Server running")})