DROP DATABASE IF EXISTS sqlstore_DB; 

CREATE DATABASE sqlstore_DB; 

USE sqlstore_DB; 

CREATE TABLE products(
	-- * item_id (unique id for each product)
	item_id INT(10) NOT NULL AUTO_INCREMENT,
	-- * product_name (Name of product)
	product_name VARCHAR(225) NOT NULL,
	-- * department_name
	department_name VARCHAR(225) NOT NULL,
	-- * price (cost to customer)
	price DECIMAL(10,2) NOT NULL,
	-- * stock_quantity (how much of the product is available in stores)
	stock_quantity INT(10) NOT NULL,
	PRIMARY KEY (item_id)
)