create database sequelize_test;
use sequelize_test;

CREATE TABLE users (
    account_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    username VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    bank_name VARCHAR(255),
	account_type VARCHAR(7),
    account_number VARCHAR(255),
    routing_number VARCHAR(255),
    is_closed VARCHAR(3),
    PRIMARY KEY(account_id)
) ENGINE=INNODB;

CREATE TABLE orders (
    order_id INT NOT NULL auto_increment,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    order_type VARCHAR(4) NOT NULL,
    order_shares INT NOT NULL,
    order_amount INT(11) NOT NULL,
    stock_name VARCHAR(10) NOT NULL,
    PRIMARY KEY(order_id),
    FOREIGN KEY (customer_id) REFERENCES users(account_id) 
) ENGINE=INNODB;

CREATE TABLE portfolio (
	portfolio_id INT NOT NULL AUTO_INCREMENT,
    customer_id INT,
    account_balance VARCHAR(100),
	stock_array TEXT,
    order_ids TEXT,
	cash_ready INT,
    PRIMARY KEY(portfolio_id),
    FOREIGN KEY (customer_id) REFERENCES users(account_id)
) ENGINE=INNODB;
