-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 07, 2024 at 02:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `created_at`, `updated_at`) VALUES
(2, 'Nike', '2024-04-04 21:58:21', '2024-04-03 21:00:00'),
(6, 'ADIDAS', '2024-04-01 20:57:30', '0000-00-00 00:00:00'),
(7, 'ZARA', '2024-04-04 21:55:52', '2024-04-06 19:14:50'),
(8, 'POLO', '2024-04-04 22:03:41', '2024-04-04 19:05:43');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`) VALUES
(3, 'SULAIMANIYAH'),
(4, 'Hawler'),
(5, 'Duhok'),
(6, 'Halabja'),
(7, 'AKRE');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_total_qty` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `order_delivery_address` varchar(100) DEFAULT NULL,
  `order_phone_number` varchar(20) DEFAULT NULL,
  `order_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order_updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_total_qty`, `city_id`, `order_delivery_address`, `order_phone_number`, `order_created_at`, `order_updated_at`, `product_id`, `user_id`) VALUES
(11, 8, 5, 'psht jogaya', '3432132', '2024-04-04 22:36:38', '2024-04-04 22:36:38', 8, 11);

-- --------------------------------------------------------

--
-- Stand-in structure for view `order_details`
-- (See below for the actual view)
--
CREATE TABLE `order_details` (
`order_id` int(11)
,`Product_Price` decimal(10,2)
,`Total_O_Price` decimal(20,2)
,`Quantity` int(11)
,`Address` varchar(100)
,`PH_Number` varchar(20)
,`P_Name` varchar(100)
,`Color` varchar(100)
,`IMAGE` text
,`Description` varchar(255)
,`City_Name` varchar(100)
,`User_Name` varchar(50)
);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `product_color` varchar(100) DEFAULT NULL,
  `product_file_url` text DEFAULT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `product_qty` int(11) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category_id`, `product_color`, `product_file_url`, `product_description`, `product_qty`, `product_price`, `created_at`, `updated_at`, `user_id`) VALUES
(8, 'SHIRT', 6, 'White', 'Shoes.jpg', 'sdfgdssdh432435676453fdvcdgf', 10, 45000.00, '2024-04-06 22:15:31', '2024-04-06 19:15:31', 10),
(11, 'SH shoes', 2, 'White', 'adidas.png', 'sdfghkfjdfsdasaSFGHFJJDSG', 1, 30.00, '2024-04-06 21:36:46', '0000-00-00 00:00:00', 10);

-- --------------------------------------------------------

--
-- Table structure for table `town`
--

CREATE TABLE `town` (
  `town_id` int(11) NOT NULL,
  `town_name` varchar(100) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `town`
--

INSERT INTO `town` (`town_id`, `town_name`, `city_id`) VALUES
(2, 'Sarchnar', 3),
(3, 'Ankawa', 4),
(5, 'Gllazard', 4),
(6, 'Dukan', 3),
(7, 'Zaxo', 5),
(8, 'Rania', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `city_id` int(11) NOT NULL,
  `town_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `created_at`, `updated_at`, `city_id`, `town_id`) VALUES
(10, 'shahram osman', 'shahram@gmail.com', 'shahram', '2024-04-03 00:05:45', '2024-04-03 00:05:45', 3, 8),
(11, 'Sarhad', 'sarhad@gmail.com', 'sarhad', '2024-04-04 22:25:35', '2024-04-04 22:25:35', 3, 8);

-- --------------------------------------------------------

--
-- Structure for view `order_details`
--
DROP TABLE IF EXISTS `order_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `order_details`  AS SELECT `orders`.`order_id` AS `order_id`, `products`.`product_price` AS `Product_Price`, `products`.`product_price`* `orders`.`order_total_qty` AS `Total_O_Price`, `orders`.`order_total_qty` AS `Quantity`, `orders`.`order_delivery_address` AS `Address`, `orders`.`order_phone_number` AS `PH_Number`, `products`.`product_name` AS `P_Name`, `products`.`product_color` AS `Color`, `products`.`product_file_url` AS `IMAGE`, `products`.`product_description` AS `Description`, `city`.`city_name` AS `City_Name`, `users`.`name` AS `User_Name` FROM (((`orders` join `products` on(`orders`.`product_id` = `products`.`product_id`)) join `city` on(`orders`.`city_id` = `city`.`city_id`)) join `users` on(`orders`.`user_id` = `users`.`user_id`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_city_rela` (`city_id`),
  ADD KEY `orders_product_rela` (`product_id`),
  ADD KEY `orders_user_rela` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_category_rela` (`category_id`),
  ADD KEY `product_user_rela` (`user_id`);

--
-- Indexes for table `town`
--
ALTER TABLE `town`
  ADD PRIMARY KEY (`town_id`),
  ADD KEY `town_city_rela` (`city_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `users_city_rela` (`city_id`),
  ADD KEY `users_town_rela` (`town_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `town`
--
ALTER TABLE `town`
  MODIFY `town_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_city_rela` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_product_rela` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_user_rela` FOREIGN KEY (`user_id`) REFERENCES `users` (`USER_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `product_category_rela` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_user_rela` FOREIGN KEY (`user_id`) REFERENCES `users` (`USER_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `town`
--
ALTER TABLE `town`
  ADD CONSTRAINT `town_city_rela` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_city_rela` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_town_rela` FOREIGN KEY (`town_id`) REFERENCES `town` (`town_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
