CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` varchar(64) UNIQUE NOT NULL,
  `fullname` varchar(50),
  `created_at` timestamp,
  `modified_at` timestamp
);

CREATE TABLE `category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `user_address` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `address` varchar(255),
  `city` varchar(255),
  `postal_code` varchar(5),
  `user_id` INT
);

CREATE TABLE `product` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `desc` varchar(255),
  `quantity` int,
  `category_id` INT,
  `price` double
);

CREATE TABLE `order` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `product_id` INT,
  `total` doubl
);

ALTER TABLE `user_address` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `category` ADD FOREIGN KEY (`id`) REFERENCES `product` (`category_id`);

ALTER TABLE `order` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
