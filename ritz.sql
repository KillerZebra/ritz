-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2016 at 11:57 PM
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
-- Table structure for table `accounts`
--

CREATE TABLE IF NOT EXISTS `accounts` (
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`firstName`, `lastName`, `username`, `email`, `password`, `id`, `level`) VALUES
('Jeff', 'Hosler', 'hoslerj2', 'hoslerj2@gmail.com', '549866b50cc87c3e0e0cef424ee2295a', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE IF NOT EXISTS `blogs` (
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL,
  `blogID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`blogID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`title`, `author`, `content`, `date`, `blogID`) VALUES
('Blog 1', 'Jeff', '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"', '2016-03-04', 1),
('Brandon sucks', 'Jeff', 'I wonder if brandon knows how bad he is. I am taking his job. I just don''t get it. He thinks he is funny but he isn''t. And don''t get me started on his dogs. I hate them so much. More than I hate him, which shouldn''t be possible. ', '2016-03-03', 2),
('Blog 3', 'Jeff', '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"', '2016-03-01', 3),
('test title', 'Jeff', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, lorem sit amet sollicitudin dignissim, est quam volutpat dui, non dictum arcu mi et dui. Vivamus molestie ultrices volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed risus mi, cursus vitae sagittis eget, efficitur eget quam. Phasellus vitae pharetra massa. Donec non augue ut nisl ornare scelerisque. Aenean ac velit velit. Cras ut orci nulla. Quisque semper ex augue, vel interdum diam sagittis nec. Cras non semper est.\r\n\r\nDonec viverra rutrum tellus eu rutrum. Ut eu dui a metus porttitor molestie at eget mauris. Fusce vel dolor orci. Nullam sit amet fermentum odio. Nam pulvinar vel orci non aliquam. Nullam in mi semper, bibendum turpis id, pulvinar magna. Nunc volutpat maximus quam, eu ultricies neque scelerisque suscipit. Quisque ut tempor magna. Maecenas leo neque, condimentum non lectus vitae, gravida ullamcorper turpis. Cras faucibus dignissim lacus, eu interdum massa pulvinar at. Donec interdum, ligula ut mattis dignissim, velit eros aliquam sapien, non laoreet ex sem ac urna. Sed scelerisque libero sed vulputate faucibus. Etiam nec scelerisque elit, sed pretium ligula. Praesent scelerisque lorem et lectus dignissim, id fermentum magna ornare. ', '2016-02-17', 4),
('i love cupcakes', 'Jeff', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, lorem sit amet sollicitudin dignissim, est quam volutpat dui, non dictum arcu mi et dui. Vivamus molestie ultrices volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed risus mi, cursus vitae sagittis eget, efficitur eget quam. Phasellus vitae pharetra massa. Donec non augue ut nisl ornare scelerisque. Aenean ac velit velit. Cras ut orci nulla. Quisque semper ex augue, vel interdum diam sagittis nec. Cras non semper est.\r\n\r\nDonec viverra rutrum tellus eu rutrum. Ut eu dui a metus porttitor molestie at eget mauris. Fusce vel dolor orci. Nullam sit amet fermentum odio. Nam pulvinar vel orci non aliquam. Nullam in mi semper, bibendum turpis id, pulvinar magna. Nunc volutpat maximus quam, eu ultricies neque scelerisque suscipit. Quisque ut tempor magna. Maecenas leo neque, condimentum non lectus vitae, gravida ullamcorper turpis. Cras faucibus dignissim lacus, eu interdum massa pulvinar at. Donec interdum, ligula ut mattis dignissim, velit eros aliquam sapien, non laoreet ex sem ac urna. Sed scelerisque libero sed vulputate faucibus. Etiam nec scelerisque elit, sed pretium ligula. Praesent scelerisque lorem et lectus dignissim, id fermentum magna ornare. ', '2016-02-17', 5),
('Cigars are Cool', 'Jeff', '<p>A <strong>cigar</strong> is a tightly-rolled bundle of dried and fermented <a title="Tobacco" href="https://en.wikipedia.org/wiki/Tobacco">tobacco</a> leaf, rolled in a series of types and sizes, that is ignited so that its smoke may be drawn into the mouth.</p>\n<p>Cigar tobacco is grown in significant quantities in <a title="Brazil" href="https://en.wikipedia.org/wiki/Brazil">Brazil</a>, <a title="Cameroon" href="https://en.wikipedia.org/wiki/Cameroon">Cameroon</a>, <a title="Cuba" href="https://en.wikipedia.org/wiki/Cuba">Cuba</a>, the <a title="Dominican Republic" href="https://en.wikipedia.org/wiki/Dominican_Republic">Dominican Republic</a>, <a title="Honduras" href="https://en.wikipedia.org/wiki/Honduras">Honduras</a>, <a title="Indonesia" href="https://en.wikipedia.org/wiki/Indonesia">Indonesia</a>, <a title="Mexico" href="https://en.wikipedia.org/wiki/Mexico">Mexico</a>, <a title="Ecuador" href="https://en.wikipedia.org/wiki/Ecuador">Ecuador</a>, <a title="Nicaragua" href="https://en.wikipedia.org/wiki/Nicaragua">Nicaragua</a>, <a title="Panama" href="https://en.wikipedia.org/wiki/Panama">Panama</a>, the <a title="Philippines" href="https://en.wikipedia.org/wiki/Philippines">Philippines</a>, <a title="Puerto Rico" href="https://en.wikipedia.org/wiki/Puerto_Rico">Puerto Rico</a>, <a title="Canary Islands" href="https://en.wikipedia.org/wiki/Canary_Islands">Canary Islands</a> (Spain), <a title="Italy" href="https://en.wikipedia.org/wiki/Italy">Italy</a> and the <a title="Eastern United States" href="https://en.wikipedia.org/wiki/Eastern_United_States">Eastern United States</a>. The origins of cigar <a title="Smoking" href="https://en.wikipedia.org/wiki/Smoking">smoking</a> are still unknown. In <a title="Guatemala" href="https://en.wikipedia.org/wiki/Guatemala">Guatemala</a>, a ceramic pot dating back to the tenth century features a <a title="Maya civilization" href="https://en.wikipedia.org/wiki/Maya_civilization">Mayan</a> smoking tobacco leaves tied together with a string. <em>Sikar</em>, the term for smoking used by the Maya, may have inspired the name cigar.<sup id="cite_ref-1" class="reference"><a href="https://en.wikipedia.org/wiki/Cigar#cite_note-1">[1]</a></sup></p>\n<p>&nbsp;</p>\n<p><sup class="reference"><a href="http://www.google.com" target="_blank">http://www.google.com</a></sup></p>', '2016-04-09', 7),
('jeff is cool', 'Jeff', '<div class="usertext-body may-blank-within md-container ">\n<div class="md">\n<p>A boy asks the crush of his dreams out to prom, and she said yes! So he plans out a list of to-do before the big dance.</p>\n<p>First he goes to rent a tux, but there is a long tux line at the shop, he waits for 20 minutes.</p>\n<p>Next, he has to get some flowers, so he heads over to the florist and there&rsquo;s a huge flower line there. He waits even longer but eventually gets the flowers. Next he heads out to rent a limo. Unfortunately, there&rsquo;s a large limo line at the rental office, but he&rsquo;s patient and gets a very nice limo.</p>\n<p>Lastly he goes to the barber and once again there is a long line but as he sits and waits he is just dreaming how his date will look, and within no time he gets his hair cut.</p>\n<p>Finally, the day of the prom comes. The two are dancing happily and his girlfriend is having a great time. When the song is over, she asks him to get her some punch, so he heads over to the punch table and there&rsquo;s no punchline.</p>\n</div>\n</div>', '2016-04-11', 8);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
