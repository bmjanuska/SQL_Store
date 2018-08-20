//====== REQUIRE
var mysql = require("mysql");
var inquirer = require("inquirer");
//==============


//====== CONNECTIONS
//--- Var to Connect to DB
var connection = mysql.createConnection ({
	host: "localhost",
	port: 8889, 
	user: "root",
	password: "root", 
	database: "sqlstore_DB"
});
//--- Connect to server and DB
connection.connect(function (err){
	if(err) throw err; 

	theStore();
}); 
//==================

//====== FUNCTIONS

//--- Display store
function theStore() {
	connection.query("SELECT * FROM products", function (err,res){
		for(var i=0; i < res.length; i++){
			console.log(res[i].item_id + " || " + res[i].product_name + " || " 
				+ res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
		}
		shop();
	})
}


function shop(){
	//--- query to database for all products
	connection.query("SELECT * FROM products", function(err, results){
		if (err) throw err; 
	//--- Allow for people to select what they want to buy from the products shown
	inquirer
	.prompt({
		name:"shopping",
		type:"list",
		message: "what would you like to purchase?",
		choices: function() {
			var shoppingArray = [];
			for (var i = 0; i < results.length; i++) {
				shoppingArray.push(results[i].product_name);
			}
			return shoppingArray;
		}

	}).then(function(answer){
		var selectedItem; 
		for (var i = 0; i < results.length; i++){
			if (results[i].item_id === answer.choice){
				selectedItem = results[i];
			}
			console.log("You have selected: " + results[i].item_id + " || " + results[i].product_name);
		}
			// thestore();
		})
})
}


//--- Remove an item from the database and have it update in the store
//--- Make the user return to the store and allow for process to repeat





//================
