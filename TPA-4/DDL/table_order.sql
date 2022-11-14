CREATE TABLE `order` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `product_id` INT,
  `total` DOUBLE
);