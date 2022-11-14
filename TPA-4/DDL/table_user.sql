CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` varchar(64) UNIQUE NOT NULL,
  `fullname` varchar(50),
  `created_at` timestamp,
  `modified_at` timestamp
);