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
	startShopping(); 
}); 
//==================

//====== FUNCTIONS
function startShopping (){

} 

//================
