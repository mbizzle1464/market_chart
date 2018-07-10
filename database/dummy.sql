USE sequelize_test;

INSERT INTO `sequelize_test`.`portfolios` (`user_id`, `portfolio_value`, `buying_power`, `cash_ready`, `owned_stock`) VALUES ( '1', '25000', '5000', '5000', 'APPL');

INSERT INTO `sequelize_test`.`portfolios` (`user_id`, `portfolio_value`, `buying_power`, `cash_ready`, `owned_stock`) VALUES ('1', '25000', '5000', '5000', 'SNAP');

INSERT INTO `sequelize_test`.`orders` (`customer_id`, `portfolio_id`, `order_type`, `order_shares`, `order_amount`, `stock_name`, `createdAt`, `updatedAt`) VALUES ('1', '1', 'buy', '10', '1000', 'APPL', NOW(), NOW());

INSERT INTO `sequelize_test`.`users` (`first_name`, `last_name`, `username`, `email`, `password`, `bank_name`, `account_type`, `account_number`, `routing_number`,`createdAt`,`updatedAt`) VALUES ('jared', 'gilpin', 'jgilpin', 'jgilpin', 'testing', 'chase', 'checking', '12345678', '12345678', NOW(), NOW());

INSERT INTO `sequelize_test`.`watchlists` (`id`, `user_id`, `watch_stock`) VALUES (NULL, '1', 'F');