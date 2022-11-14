CREATE TABLE `product` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `desc` varchar(255),
  `quantity` int,
  `category_id` INT,
  `price` double
);