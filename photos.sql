-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2016 at 11:24 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ritz`
--

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `photoURL` varchar(255) NOT NULL,
  `album` varchar(255) NOT NULL,
  `photogroup` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`photoURL`, `album`, `photogroup`, `date`, `id`) VALUES
('/ritz/images/uploads/graduation/Corey_Bouillez/Corey_Bouillez4.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 27),
('/ritz/images/uploads/graduation/Corey_Bouillez/Corey_Bouillez3.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 28),
('/ritz/images/uploads/graduation/Corey_Bouillez/Corey_Bouillez2.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 29),
('/ritz/images/uploads/graduation/Corey_Bouillez/Corey_Bouillez.jpg', 'Corey Bouillez', 'graduation', '2016-05-02', 30),
('/ritz/images/uploads/graduation/Jeff_Hosler/jeff4.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 31),
('/ritz/images/uploads/graduation/Jeff_Hosler/jeff3.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 32),
('/ritz/images/uploads/graduation/Jeff_Hosler/jeff2.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 33),
('/ritz/images/uploads/graduation/Jeff_Hosler/jeff1.jpg', 'Jeff Hosler', 'graduation', '2016-05-02', 34),
('/ritz/images/uploads/weddings/Jack_and_Jill/flowers.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 35),
('/ritz/images/uploads/weddings/Jack_and_Jill/shesaidyes.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 36),
('/ritz/images/uploads/weddings/Jack_and_Jill/bestman.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 37),
('/ritz/images/uploads/weddings/Jack_and_Jill/alter1.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 38),
('/ritz/images/uploads/weddings/Jack_and_Jill/brideandkid.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 39),
('/ritz/images/uploads/weddings/Jack_and_Jill/image001.png', 'Jack and Jill', 'weddings', '2016-05-02', 40),
('/ritz/images/uploads/weddings/Jack_and_Jill/alter2.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 41),
('/ritz/images/uploads/weddings/Jack_and_Jill/weddingdress2.jpg', 'Jack and Jill', 'weddings', '2016-05-02', 42);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
