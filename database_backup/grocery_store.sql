-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2022 at 10:08 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grocery_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `category_item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `customer_id`, `category_item_id`, `quantity`) VALUES
(1, 1, 2, 1),
(4, 1, 3, 1),
(5, 2, 3, 0),
(6, 2, 1, 1),
(7, 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL COMMENT 'general image'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `image`) VALUES
(1, 'Vegetables', 'https://media.istockphoto.com/photos/vegetables-on-display-and-for-sale-at-farmers-market-picture-id601013136?k=20&m=601013136&s=612x612&w=0&h=YyUJvQIMeELjRpxXLjqCvVLRI83YiwYzrFooQhg_AJc='),
(2, 'Fruits', 'https://media.istockphoto.com/photos/fruit-background-picture-id529664572?k=20&m=529664572&s=612x612&w=0&h=UPKnmT4wmX8KB_nke3R0Y6mH_syPYn7KTKFFYLJEJ8U='),
(3, 'Cleaning Essentials', 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2012/9/11/3/RX-HGMAG005_Clean-House-Confessions-034-e_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1400977682672.jpeg'),
(4, 'Daily Essentials', 'https://media.istockphoto.com/photos/milk-eggs-and-bread-on-the-wooden-table-with-copy-space-for-text-picture-id983901002?k=20&m=983901002&s=612x612&w=0&h=FVrImLjYqf0oOEgwc2L3WDguKQe7gR5KCs_fdgRzPP0='),
(5, 'Instant Food', 'https://media.istockphoto.com/photos/mix-of-chips-snacks-and-crackers-on-a-wooden-stand-unhealthy-food-picture-id1282580120?k=20&m=1282580120&s=612x612&w=0&h=vZEFCT0pAj0jnhtbLQXFAB2vlllndqE7q5w-PuAc72E='),
(6, 'Personal Care', 'https://media.istockphoto.com/photos/soap-bar-and-liquid-shampoo-shower-gel-towels-spa-kit-picture-id584574708?k=20&m=584574708&s=612x612&w=0&h=3BpY_ojs0Gm-d5CkFNADt0A-N68yLIO1By7gc2xNknI=');

-- --------------------------------------------------------

--
-- Table structure for table `category_items`
--

CREATE TABLE `category_items` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL COMMENT 'image of each item',
  `quantity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_items`
--

INSERT INTO `category_items` (`id`, `category_id`, `name`, `price`, `image`, `quantity`) VALUES
(1, 6, 'Shampoo', 450, 'https://m.media-amazon.com/images/I/41YOIARZyaL._SL1000_.jpg', '250 ml'),
(2, 6, 'Shampoo', 600, 'https://m.media-amazon.com/images/I/41YOIARZyaL._SL1000_.jpg', '500 ml'),
(3, 6, 'Moisturizer', 400, 'https://media.istockphoto.com/photos/dove-nourishing-shower-cream-picture-id458600183?k=20&m=458600183&s=612x612&w=0&h=kkvBY2b2XE7Ge52S6h-iTVaiVkflFRzYoPaKFiz62gI=', '500 ml'),
(4, 6, 'Moisturizer', 325, 'https://media.istockphoto.com/photos/dove-nourishing-shower-cream-picture-id458600183?k=20&m=458600183&s=612x612&w=0&h=kkvBY2b2XE7Ge52S6h-iTVaiVkflFRzYoPaKFiz62gI=', '250 ml'),
(5, 6, 'Face Cream', 250, 'https://m.media-amazon.com/images/I/619GOYL+whL._SL1500_.jpg', '100 ml'),
(6, 6, 'Face Cream', 125, 'https://m.media-amazon.com/images/I/619GOYL+whL._SL1500_.jpg', '200 ml'),
(7, 5, 'Chicken Cup Noodles', 40, 'https://m.media-amazon.com/images/I/51llDKvs5ML.jpg', '1 '),
(8, 5, 'Vegetable Cup Noodles', 30, 'https://m.media-amazon.com/images/I/91sFWJgCLDL._SL1500_.jpg', '1'),
(9, 5, 'Lays Masala Magic', 10, 'https://m.media-amazon.com/images/I/71CcmSuTAnL._SL1500_.jpg', '30 g'),
(10, 5, 'Lays Masala Magic', 20, 'https://5.imimg.com/data5/SELLER/Default/2021/1/IS/JR/JY/121358408/71uq3b9609l-sl1500--500x500.jpg', '50 g'),
(11, 5, 'Lays American Cream & Onion', 10, 'https://m.media-amazon.com/images/I/710dKk4a0cL._SX522_.jpg', '30 g'),
(12, 4, 'Bread', 22, 'https://www.jiomart.com/images/product/600x600/490626261/wibs-large-bread-400-g-product-images-o490626261-p490626261-0-202204092013.jpg', '1'),
(13, 4, 'Toned Milk', 30, 'https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg', '1'),
(14, 4, 'Brown Bread', 30, 'https://www.jiomart.com/images/product/600x600/491127282/britannia-100-whole-wheat-bread-450-g-product-images-o491127282-p491127282-1-202204092013.jpg', '1'),
(15, 4, 'Eggs', 28, 'https://assets.tendercuts.in/product/u/h/uhw.jpg', '6'),
(16, 4, 'Eggs', 38, 'https://m.media-amazon.com/images/I/31J2VNcw51L.jpg', '12'),
(17, 3, 'Toilet Cleaner', 125, 'https://cdn01.pharmeasy.in/dam/products_otc/S36514/harpic-power-plus-original-toilet-cleaner-bottle-of-500-ml-2-1641793403.jpg', '500 ml'),
(18, 3, 'Scrub Pad', 25, 'https://m.media-amazon.com/images/I/91+Rw+hgKlS._SL1500_.jpg', '1'),
(19, 3, 'Floor Mop', 200, 'https://images-eu.ssl-images-amazon.com/images/I/51g9J2BK5rS._AC._SR360,460.jpg', '1'),
(20, 3, 'Bathroom cleaner', 150, 'https://5.imimg.com/data5/PF/II/TP/SELLER-61622388/red-harpic-500x500.jpg', '500 ml'),
(21, 3, 'Mosquito Spray', 200, 'https://m.media-amazon.com/images/I/611IGFmQ98L._SL1500_.jpg', '1'),
(22, 1, 'Lady Finger', 35, 'https://media.istockphoto.com/photos/fresh-vegetables-ladyfinger-in-the-market-picture-id1260060960?k=20&m=1260060960&s=612x612&w=0&h=vEoKwIik2a-pXCSdwhk6t9I5fWrTnhD92RHyA3L0jLk=', '250 g'),
(23, 1, 'Lady Finger', 65, 'https://media.istockphoto.com/photos/fresh-vegetables-ladyfinger-in-the-market-picture-id1260060960?k=20&m=1260060960&s=612x612&w=0&h=vEoKwIik2a-pXCSdwhk6t9I5fWrTnhD92RHyA3L0jLk=', '500 g'),
(24, 1, 'Onions', 40, 'https://media.istockphoto.com/photos/red-onion-and-slices-with-green-sprout-picture-id1095322424?k=20&m=1095322424&s=612x612&w=0&h=_SlymFa0iF0ZEDPj1wnDxFJ69TW_vJYBWElBXexdL6M=', '250 g'),
(25, 1, 'Onions', 60, 'https://media.istockphoto.com/photos/red-onion-and-slices-with-green-sprout-picture-id1095322424?k=20&m=1095322424&s=612x612&w=0&h=_SlymFa0iF0ZEDPj1wnDxFJ69TW_vJYBWElBXexdL6M=', '500 g'),
(26, 1, 'Potatoes', 60, 'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=', '500 g'),
(27, 1, 'Potatoes', 45, 'https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=', '250 g'),
(28, 1, 'Capsicum', 30, 'https://media.istockphoto.com/photos/green-bell-peppers-picture-id837203306?k=20&m=837203306&s=612x612&w=0&h=7-r1Ji4u8Ut_l_lOcAJEW3aaQC3f39vKf3_EcdQq3Ww=', '200 g'),
(29, 1, 'Capsicum', 45, 'https://media.istockphoto.com/photos/green-bell-peppers-picture-id837203306?k=20&m=837203306&s=612x612&w=0&h=7-r1Ji4u8Ut_l_lOcAJEW3aaQC3f39vKf3_EcdQq3Ww=', '300 g'),
(30, 1, 'Brinjal', 60, 'https://media.istockphoto.com/photos/eggplant-isolated-on-white-picture-id510515443?k=20&m=510515443&s=612x612&w=0&h=VZfZR8XRcGJzOcpcB1jF4teU-flgqcXdwYsmfM7OzDI=', '300 g'),
(31, 1, 'Brinjal', 25, 'https://media.istockphoto.com/photos/eggplant-isolated-on-white-picture-id510515443?k=20&m=510515443&s=612x612&w=0&h=VZfZR8XRcGJzOcpcB1jF4teU-flgqcXdwYsmfM7OzDI=', '100 g'),
(32, 1, 'Cabbage', 30, 'https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-background-picture-id624925456?k=20&m=624925456&s=612x612&w=0&h=AuTlbQavcaQWxC0ba_Zw_u3WD7K-OzkyZvMLlIZC9v4=', '1'),
(33, 2, 'Pineapple', 100, 'https://media.istockphoto.com/photos/whole-with-slice-ripe-pineapple-isolated-on-white-background-picture-id1064819674?k=20&m=1064819674&s=612x612&w=0&h=WIYJDrmo9L6xh8-l0dCkmCCb9_rIBQhhp4m2MXK_XMc=', '1'),
(34, 2, 'Coconut', 25, 'https://media.istockphoto.com/photos/broken-coconut-isolated-on-white-picture-id165695881?k=20&m=165695881&s=612x612&w=0&h=IkvXD5CgFdvx52rhwd8UHskLcLNOx7Is9gbfd376JxM=', '1'),
(35, 2, 'Bananas', 35, 'https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=', '6'),
(36, 2, 'Papaya', 55, 'https://media.istockphoto.com/photos/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-picture-id864053288?k=20&m=864053288&s=612x612&w=0&h=8HEr_Yxju24vyhbXlcbsOwJur5YP7s6tbDKo_JUaDjk=', '1'),
(37, 2, 'Plums', 80, 'https://media.istockphoto.com/photos/red-plums-picture-id163697326?k=20&m=163697326&s=612x612&w=0&h=v00GnuBLaAuoGs3ppv1YXxMkcXP7j8xC4m2oVlX_10o=', '300 g'),
(38, 2, 'Apples', 80, 'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=20&m=185262648&s=612x612&w=0&h=nxfd_QVNvUHjaZLq-p7jnF_TFm1N-vZTSy-wFyScoQg=', '500 g'),
(39, 2, 'Strawberries', 100, 'https://media.istockphoto.com/photos/two-strawberries-isolated-on-white-background-picture-id471674664?k=20&m=471674664&s=612x612&w=0&h=ZVf_95lRjNUA3QgZi8mXFT731rW_XlvP1tzq0B2lw7c=', '1 box'),
(40, 2, 'Kiwis', 120, 'https://media.istockphoto.com/photos/kiwi-on-black-background-or-board-fresh-cut-citrus-fruits-picture-id1214887864?k=20&m=1214887864&s=612x612&w=0&h=lw2UHlQ4GhwJ53FTxk6RQeQJFWnc6DmmdwVAwYeNtSk=', '500 g');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL COMMENT 'city from drop down'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `contact`, `email`, `address`, `password`, `location`) VALUES
(1, 'Shaun Dsouza', '111111111', 'bungee@bungee.com', 'Colaba', 'U2FsdGVkX19xnl+t+kNr2OIcD/ViZDyKITOveXhX/yg=', 'Fort'),
(2, 'Abhinav Haridas', '1234567891', 'asdf@asdf.com', 'Bandra Bandstand', 'abhinav123', 'Bandra'),
(3, 'Himnish Israni', '2333333', 'ghr@ghr.com', 'Dadar Flower Market', 'qwerty1234', 'Dadar'),
(4, 'Kaushal Poojary', '913766878', 'wes@wes.ac.in', 'Chattogram Rikshaw Stand', 'U2FsdGVkX1+B2ghYLlhv6iz+6cA+DT00wwQx+EA0NJs=', 'Dhaka'),
(5, 'Babar Azam', '8122345235', '2020.babar.azambwe@trophless.com', 'Rawalpindi', 'U2FsdGVkX19zp3LrFKzRqoZZKzcYOD55roxAlYyNtGE=', 'Pakistan');

-- --------------------------------------------------------

--
-- Table structure for table `deal_items`
--

CREATE TABLE `deal_items` (
  `id` int(11) NOT NULL,
  `deal_type_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'https:/default.jpg',
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deal_items`
--

INSERT INTO `deal_items` (`id`, `deal_type_id`, `image`, `description`) VALUES
(1, 1, 'https://static.toiimg.com/thumb/msid-87872889/87872889.jpg?width=500&resizemode=4', 'Fresh and juicy Apples straight from the valleys of Kashmir'),
(2, 1, 'https://media.istockphoto.com/photos/tangerine-duo-with-leafs-picture-id182463420?k=20&m=182463420&s=612x612&w=0&h=9oJOMbn4Kki8rAKX9goJ-hUuk3U93ahR3mwSUozaCLA=', 'Juicy Oranges hailing from the evergreen farms of Nagpur.'),
(3, 1, 'https://img.krishijagran.com/media/42788/onion.png', 'Pusa red onions from the state of Maharashtra, Karnataka and Gujarat'),
(4, 1, 'https://media.istockphoto.com/photos/banana-bunch-picture-id162487071?k=20&m=162487071&s=612x612&w=0&h=8E3j_qFNPqPRIbsjifXEpl7CnM-Dc1mb-0CNB2UKUK0=', 'Ripe Bananas from the orchids of Kerela'),
(6, 2, 'https://m.media-amazon.com/images/I/91knoLR58JL._SX522_.jpg', 'Share some cookies with your loved ones this festive season'),
(7, 2, 'https://media.istockphoto.com/photos/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-picture-id1054228718?k=20&m=1054228718&s=612x612&w=0&h=OFcioOdcbacinr2F7M0hULoAr3egWnU_BIt5XLmznf0=', 'On this sweet occasion, Don\'t feel shy to share some sweets '),
(8, 2, 'https://media.istockphoto.com/photos/snacks-picture-id175544379?k=20&m=175544379&s=612x612&w=0&h=dFH7mTON_Y-F7pmMIhhrniZ40HhJmn7ZTfx8ej8WDtI=', 'Remove the dryness by sending some dry fruits.'),
(9, 2, 'https://media.istockphoto.com/photos/chocolates-picture-id488182109?k=20&m=488182109&s=612x612&w=0&h=BljjWACLTy7pp3MZaLV6OCwgBfNRkmRD9NxpC1-uRd0=', 'Is mubarak baat par kuch meetha ho jaye.'),
(10, 3, 'https://media.istockphoto.com/photos/popular-kesar-mangoeswith-light-green-backround-isolated-picture-id534608466?k=20&m=534608466&s=612x612&w=0&h=RGxeTAiIzrvcON8DEmO3Q6pFL1UHjba8lNCom4uEKHQ=', 'Juicy, Ripe Mangoes from the farms of Ratnagiri.'),
(11, 3, 'https://media.istockphoto.com/photos/fresh-lychee-fruits-picture-id120728619?k=20&m=120728619&s=612x612&w=0&h=FQaM4stsbilqQePZZSCRCIXni_wyPqrSwnddJISudww=', 'From the mangroves of Kolkata, we present you fresh lychees.'),
(12, 3, 'https://media.istockphoto.com/photos/whole-and-slices-watermelon-fruit-isolated-on-white-background-picture-id1142119394?k=20&m=1142119394&s=612x612&w=0&h=WYmqVP2mpZFh4Ql2NtF3Mcz5u9vrkX2QyZZe7XYtB5Q=', 'Vibrant pink to red flesh with dark brown-black seeds and dark green watermelons from Andhra Pradesh.'),
(13, 3, 'https://media.istockphoto.com/photos/kiwi-on-black-background-or-board-fresh-cut-citrus-fruits-picture-id1214887864?k=20&m=1214887864&s=612x612&w=0&h=lw2UHlQ4GhwJ53FTxk6RQeQJFWnc6DmmdwVAwYeNtSk=', 'Fresh and Juicy Kiwis');

-- --------------------------------------------------------

--
-- Table structure for table `deal_types`
--

CREATE TABLE `deal_types` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT 'type like deals,bestsellers,festive deals etc'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deal_types`
--

INSERT INTO `deal_types` (`id`, `title`) VALUES
(1, 'Bestsellers'),
(2, 'Festive Deals'),
(3, 'End Of Season ');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `email` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL COMMENT 'input from dropdown',
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `customer_id`, `name`, `contact`, `email`, `reason`, `description`) VALUES
(1, 1, 'Shaun Dsouza', '1212121212', 'shaun@shaun.com', 'Feedback', 'The groceries were delivered at the right time.'),
(4, 2, 'Kaushal Poojary', '12345677899', 'kaushalpoojary@gmail.com', 'Complaint', 'te a complaint letter, you can start with the sender\'s address followed by the date, the receiver\'s address, the subject, salutation, body of the letter, complimentary closing, signature and name in blo');

-- --------------------------------------------------------

--
-- Table structure for table `inventories`
--

CREATE TABLE `inventories` (
  `id` int(11) NOT NULL,
  `category_item_id` int(11) NOT NULL,
  `stock_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventories`
--

INSERT INTO `inventories` (`id`, `category_item_id`, `stock_count`) VALUES
(1, 1, 10),
(2, 2, 10),
(3, 21, 15),
(4, 3, 15),
(5, 15, 20),
(6, 12, 22),
(7, 23, 15),
(8, 10, 7),
(9, 7, 10);

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `category_item_id` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `offer_code` varchar(255) NOT NULL,
  `offer_end_date` date NOT NULL COMMENT 'last date till offer exist'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `category_item_id`, `discount`, `description`, `offer_code`, `offer_end_date`) VALUES
(4, 2, 50, '50% off on first order.', '#NEW50', '2022-12-31'),
(5, 1, 5, '5% cashback on seasonal fruits.', '#FRUIT5', '2022-11-30'),
(6, 3, 10, '10% Discount Vegetables.', '#VEG10', '2022-12-31'),
(7, 4, 20, '20% off on personal care products', '#20SELFCARE', '2022-11-30'),
(8, 5, 40, '40% off on more than 5 items.', '#5TH40', '2022-12-31'),
(9, 6, 30, '30% cashback on bestseller products.', '#30BESTSELLER', '2023-01-31');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order_status` int(2) NOT NULL COMMENT '-1,0,1 for cancelled,pending,success',
  `order_address` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `order_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `order_date`, `order_status`, `order_address`, `payment_method`, `order_amount`) VALUES
(1, 2, '2022-10-23 06:57:29', 0, 'MICL,Vikhroli Station', 'Cash', 500);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `category_item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `category_item_id`, `quantity`) VALUES
(1, 1, 1, 5),
(2, 1, 2, 2),
(3, 4, 4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` int(11) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `otp` int(11) NOT NULL,
  `status` int(2) NOT NULL DEFAULT 0 COMMENT '0 = not verified\r\n1 = verified',
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `contact`, `otp`, `status`, `time`) VALUES
(1, '9137667638', 515772, 1, '2022-10-30 09:07:11'),
(2, '9137667638', 255082, 1, '2022-10-30 09:17:55'),
(3, '9137667638', 413054, 1, '2022-10-30 09:19:23'),
(4, '9137667638', 461587, 0, '2022-10-30 14:02:04'),
(5, '7977854846', 209038, 0, '2022-10-30 14:05:37');

-- --------------------------------------------------------

--
-- Table structure for table `payment_details`
--

CREATE TABLE `payment_details` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `card_number` varchar(255) NOT NULL,
  `card_holder_name` varchar(255) NOT NULL,
  `card_expiry_date` date NOT NULL,
  `cvv` varchar(255) NOT NULL,
  `status` int(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment_details`
--

INSERT INTO `payment_details` (`id`, `customer_id`, `card_number`, `card_holder_name`, `card_expiry_date`, `cvv`, `status`) VALUES
(1, 2, '123445678', 'Himinish Irani', '2025-10-08', '123', 0),
(7, 3, 'U2FsdGVkX1/Sc/SrzJ+IlNjsSClJ6PE1iifb6eF9py8=', 'Robert Lewandowski', '2020-03-12', 'U2FsdGVkX18gkn427b+W+0Xz4RFH3N2PdFn5z6nNww0=', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_items`
--
ALTER TABLE `category_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deal_items`
--
ALTER TABLE `deal_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deal_types`
--
ALTER TABLE `deal_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventories`
--
ALTER TABLE `inventories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category_items`
--
ALTER TABLE `category_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `deal_items`
--
ALTER TABLE `deal_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `deal_types`
--
ALTER TABLE `deal_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inventories`
--
ALTER TABLE `inventories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
