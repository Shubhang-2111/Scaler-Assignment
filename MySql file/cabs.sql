-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2023 at 12:21 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cab-booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `cabs`
--

CREATE TABLE `cabs` (
  `cab_id` int(11) NOT NULL,
  `cab_name` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(25) DEFAULT 'NOT BOOKED',
  `source` varchar(25) DEFAULT 'N/A',
  `destination` varchar(25) DEFAULT 'N/A',
  `booking_time` time DEFAULT NULL,
  `ending_time` time DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cabs`
--

INSERT INTO `cabs` (`cab_id`, `cab_name`, `price`, `status`, `source`, `destination`, `booking_time`, `ending_time`, `user_id`) VALUES
(1, 'Hyundai', 50, 'NOT BOOKED', 'N/A', 'N/A', NULL, NULL, NULL),
(2, 'Tata', 75, 'NOT BOOKED', 'N/A', 'N/A', NULL, NULL, NULL),
(3, 'Maruti', 30, 'NOT BOOKED', 'N/A', 'N/A', NULL, NULL, NULL),
(4, 'Nissan', 25, 'NOT BOOKED', 'N/A', 'N/A', NULL, NULL, NULL),
(5, 'Honda', 60, 'NOT BOOKED', 'N/A', 'N/A', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cabs`
--
ALTER TABLE `cabs`
  ADD PRIMARY KEY (`cab_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
