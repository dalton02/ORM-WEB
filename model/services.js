const {Sequelize,DataTypes} = require('sequelize');

class FoodServices{

	constructor(sequelize){
		this.sequelize = sequelize;
		this.food = this.sequelize.define('foods',{
			id:{
				type: DataTypes.INTEGER,
    			autoIncrement: true,
    			primaryKey: true
			},
			name:{
				type: DataTypes.STRING,
				allowNull: false
			},
			category:{
				type: DataTypes.STRING,
				allowNull: false
			},
			quantity:{
				type: DataTypes.INTEGER,
				allowNull: false
			},
			expirationdate: {
    			type: DataTypes.DATE,
    			allowNull: false
 			},
  			price: {
    			type: DataTypes.DECIMAL(10, 2),
    			allowNull: false
  			}
		});
	}

	findById = async(id) =>{
		const food = await this.food.findOne({where:{id: `${id}`}});
		return food;
	}
	findAll = async()=>{
		const foods = await this.food.findAll();
		return foods;
	}
	createFood = async(name,category,quantity,expirationdate,price)=>{
		const food = await this.food.create({
			name: name,
			category: category,
			quantity: quantity,
			expirationdate: expirationdate,
			price: price
		});
	}
	updateFood = async(id,name,category,quantity,expirationdate,price)=>{
		const food = await this.food.findOne({where:{id:`${id}`}});
		food.name = name;
		food.category = category;
		food.quantity = quantity;
		food.expirationdate = expirationdate;
		food.price = price;
		await food.save();
	}
	deleteFood = async(id)=>{
		await this.food.destroy({where:{id:`${id}`}});
	}
}

module.exports = {FoodServices};