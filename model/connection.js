const {Sequelize} = require('sequelize');

class SequelizeConnection{

	constructor(){
		this.seque = new Sequelize('FoodData', 'postgres', 'admin', {
  		host: 'localhost',
 	 	dialect: 'postgres',
  		port: '1024',
  		define: {
        	timestamps: false //Remove colunas chatas
   		}
		});
		this.auth();
	}

	auth = async ()=>{
		try {
  			await this.seque.authenticate();
  			console.log('Connection has been established successfully.');
		}catch (error) {
 	 		console.error('Unable to connect to the database:', error);
		}
	}

}

module.exports = {SequelizeConnection};