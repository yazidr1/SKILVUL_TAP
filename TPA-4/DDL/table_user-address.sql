CREATE TABLE `user_address` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `address` varchar(255),
  `city` varchar(255),
  `postal_code` varchar(5),
  `user_id` INT
);