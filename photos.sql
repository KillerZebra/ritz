-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 03, 2016 at 10:24 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ritz`
--

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `photoURL` varchar(255) NOT NULL,
  `album` varchar(255) NOT NULL,
  `photogroup` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`photoURL`, `album`, `photogroup`, `date`, `id`) VALUES
('/ritz/images/uploads/graduation/Corey_Bouillez/Corey_Bouillez4.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 27),
('/ritz/images/uploads/graduation/Corey Bouillez/Corey Bouillez3.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 28),
('/ritz/images/uploads/graduation/Corey Bouillez/Corey Bouillez2.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 29),
('/ritz/images/uploads/graduation/Corey Bouillez/Corey Bouillez.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 30),
('/ritz/images/uploads/graduation/Jeff Hosler/jeff4.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 31),
('/ritz/images/uploads/graduation/Jeff Hosler/jeff3.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 32),
('/ritz/images/uploads/graduation/Jeff Hosler/jeff2.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 33),
('/ritz/images/uploads/graduation/Jeff Hosler/jeff1.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 34),
('/ritz/images/uploads/weddings/Jack and Jill/flowers.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 35),
('/ritz/images/uploads/weddings/Jack and Jill/shesaidyes.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 36),
('/ritz/images/uploads/weddings/Jack and Jill/bestman.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 37),
('/ritz/images/uploads/weddings/Jack and Jill/alter1.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 38),
('/ritz/images/uploads/weddings/Jack and Jill/brideandkid.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 39),
('/ritz/images/uploads/weddings/Jack and Jill/image001.png', 'Jack and Jill', 'weddings', '2016-05-02', 40),
('/ritz/images/uploads/weddings/Jack and Jill/alter2.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 41),
('/ritz/images/uploads/weddings/Jack and Jill/weddingdress2.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 42);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
