/*
Navicat MySQL Data Transfer

Source Server         : localhost:3306
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : cseeker

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2013-10-02 00:30:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `configs`
-- ----------------------------
DROP TABLE IF EXISTS `configs`;
CREATE TABLE `configs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `value` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of configs
-- ----------------------------

-- ----------------------------
-- Table structure for `cron_emails`
-- ----------------------------
DROP TABLE IF EXISTS `cron_emails`;
CREATE TABLE `cron_emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `body` text,
  `from_email` varchar(200) DEFAULT NULL,
  `from_name` varchar(200) DEFAULT NULL,
  `to_email` varchar(200) DEFAULT NULL,
  `to_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cron_emails
-- ----------------------------
INSERT INTO `cron_emails` VALUES ('1', '2013-10-01 00:44:36', 'Thank for your registration', 'Email template success', null, null, 'longnt@dos.com.vn', 'Long Nguyen');
INSERT INTO `cron_emails` VALUES ('2', '2013-10-01 00:45:25', 'Thank for your registration', 'Email template success', null, null, 'longnt@dos.com.vn', 'Long Nguyen');
INSERT INTO `cron_emails` VALUES ('3', '2013-10-01 00:45:34', 'Thank for your registration', 'Email template success', null, null, 'longnt@dos.com.vn', 'Long Nguyen');
INSERT INTO `cron_emails` VALUES ('4', '2013-10-01 00:46:56', 'Thank for your registration', 'Email template success', null, null, 'longnt@dos.com.vn', 'Long Nguyen');
INSERT INTO `cron_emails` VALUES ('5', '2013-10-01 00:47:32', 'Thank for your registration', 'Email template success', null, null, 'longnt@dos.com.vn', 'Long Nguyen');
INSERT INTO `cron_emails` VALUES ('6', '2013-10-01 02:11:12', 'Thank for your registration', 'Email template success', null, null, 'longnt@dos.com.vn', 'Long Nguyen');

-- ----------------------------
-- Table structure for `cseekers`
-- ----------------------------
DROP TABLE IF EXISTS `cseekers`;
CREATE TABLE `cseekers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_by_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `desc` text,
  `rate_total` int(11) DEFAULT NULL,
  `rate_count` int(11) DEFAULT NULL,
  `interpreting_fee` decimal(20,5) DEFAULT NULL,
  `taxs_fee` decimal(20,5) DEFAULT NULL,
  `transport_fee` decimal(20,5) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `post_code` varchar(20) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `time_start` time DEFAULT NULL,
  `time_end` time DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `meeting_id` int(11) DEFAULT NULL,
  `room_type_id` int(11) DEFAULT NULL,
  `latitude` varchar(30) DEFAULT NULL,
  `longitude` varchar(30) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cseekers
-- ----------------------------

-- ----------------------------
-- Table structure for `items`
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(40) DEFAULT 'SERVICE' COMMENT 'COUNTRY, STATE, SERVICE, GENDER',
  `parent_id` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `desc` text,
  `ord` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES ('1', 'GENDER', null, 'Mr', null, null);
INSERT INTO `items` VALUES ('2', 'GENDER', null, 'Mrs', null, null);
INSERT INTO `items` VALUES ('3', 'GENDER', null, 'Miss', null, null);
INSERT INTO `items` VALUES ('4', 'SECURITY_QUESTION', null, 'Question 1', null, null);
INSERT INTO `items` VALUES ('5', 'SECURITY_QUESTION', null, 'Question 2', null, null);

-- ----------------------------
-- Table structure for `logs`
-- ----------------------------
DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `content` text,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of logs
-- ----------------------------

-- ----------------------------
-- Table structure for `newsletters`
-- ----------------------------
DROP TABLE IF EXISTS `newsletters`;
CREATE TABLE `newsletters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `ip_address` varchar(30) DEFAULT NULL,
  `user_agent` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of newsletters
-- ----------------------------

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_code` varchar(30) NOT NULL,
  `cseeker_id` bigint(20) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `customer_name` varchar(200) DEFAULT NULL,
  `customer_address` varchar(200) DEFAULT NULL,
  `customer_email` varchar(200) DEFAULT NULL,
  `customer_country_id` int(11) DEFAULT NULL,
  `customer_state_id` int(11) DEFAULT NULL,
  `status` varchar(30) DEFAULT 'WAITING' COMMENT 'WAITING, CONFIRMED, UNCONFIRMED',
  PRIMARY KEY (`order_code`,`cseeker_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for `usermetas`
-- ----------------------------
DROP TABLE IF EXISTS `usermetas`;
CREATE TABLE `usermetas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `value` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usermetas
-- ----------------------------

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT 'USER' COMMENT 'BUSINESS, USER, ADMIN',
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT '1',
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `password_reset` varchar(100) DEFAULT NULL,
  `date_reset_expired` datetime DEFAULT NULL,
  `salt` varchar(20) DEFAULT NULL,
  `security_question` varchar(50) DEFAULT NULL,
  `security_answer` varchar(100) DEFAULT NULL,
  `has_newsletter` tinyint(1) DEFAULT '0',
  `role` text,
  `status` varchar(20) DEFAULT 'WAITING' COMMENT 'ACTIVED, WAITING, LOCKED, DELETED',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('6', 'BASIC', 'member', 'd033e22ae348aeb5660fc2140aec35850c4da997', '1', null, null, null, null, null, null, null, null, null, null, '0', null, 'WAITING');
INSERT INTO `users` VALUES ('7', 'ADMIN', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', '1', 'Long', 'Nguyen', 'longnt@dos.com.vn', '2013-10-01 02:11:12', '2013-10-01 02:11:12', null, null, null, 'Question 1', 'asm', '0', null, 'WAITING');

-- ----------------------------
-- Table structure for `user_onlines`
-- ----------------------------
DROP TABLE IF EXISTS `user_onlines`;
CREATE TABLE `user_onlines` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ip_address` varchar(30) DEFAULT NULL,
  `user_agent` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_onlines
-- ----------------------------

-- ----------------------------
-- Table structure for `user_services`
-- ----------------------------
DROP TABLE IF EXISTS `user_services`;
CREATE TABLE `user_services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `service_id` int(11) NOT NULL DEFAULT '0',
  `user_id` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`user_id`,`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_services
-- ----------------------------
