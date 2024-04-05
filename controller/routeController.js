const {FoodServices} = require('../model/services.js');

class RouteController{

	constructor(sequelize){
		this.sequelize = sequelize;
		this.services = new FoodServices(this.sequelize);
	}

	findAll = async (request,response)=>{
		try{
			const allFoods = await this.services.findAll();
			response.status(200).json({Foods: allFoods});
		}
		catch(err){
			response.status(401).json({Error: err});
		}
	}
	findById = async(request,response) =>{
		try{
			const {id} = request.params;
			const food = await this.services.findById(id);
			if(food==null) 	return response.status(404).json({Message: "Food in this id dont exist"});
			response.status(200).json({Food: food});
		}
		catch(err){
			response.status(401).json({Error:err});
		}
	}
	createFood = async(request,response) =>{
		try{
			const {name,category,quantity,expirationdate,price} = request.body;
			await this.services.createFood(name,category,quantity,expirationdate,price);
			response.status(200).json({Message: 'Food was created'});
		}
		catch(err){
			response.status(404).json({Message: `${err}`});
		}
	}
	updateFood = async(request,response)=>{
		try{
			const {id} = request.params;
			const {name,category,quantity,expirationdate,price} = request.body;
			await this.services.updateFood(id,name,category,quantity,expirationdate,price);
			response.status(200).json({Message: 'Food was updated'});
		}
		catch(err){
			response.status(404).json({Message: `Not able to updated because => ${err}`});
		}
	}
	deleteFood = async(request,response)=>{
		try{
			const {id} = request.params;
			await this.services.deleteFood(id);
			response.status(200).json({Message: 'Food was deleted'});
		}
		catch(err){
			response.status(401).json({Message:`Not able to deleted because => ${err}`});
		}
	}



}

module.exports = {RouteController};