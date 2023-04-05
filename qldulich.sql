-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: qldulich
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add user',6,'add_user'),(22,'Can change user',6,'change_user'),(23,'Can delete user',6,'delete_user'),(24,'Can view user',6,'view_user'),(25,'Can add location',7,'add_location'),(26,'Can change location',7,'change_location'),(27,'Can delete location',7,'delete_location'),(28,'Can view location',7,'view_location'),(29,'Can add post',8,'add_post'),(30,'Can change post',8,'change_post'),(31,'Can delete post',8,'delete_post'),(32,'Can view post',8,'view_post'),(33,'Can add tour',9,'add_tour'),(34,'Can change tour',9,'change_tour'),(35,'Can delete tour',9,'delete_tour'),(36,'Can view tour',9,'view_tour'),(37,'Can add user tour',10,'add_usertour'),(38,'Can change user tour',10,'change_usertour'),(39,'Can delete user tour',10,'delete_usertour'),(40,'Can view user tour',10,'view_usertour'),(41,'Can add tour image',11,'add_tourimage'),(42,'Can change tour image',11,'change_tourimage'),(43,'Can delete tour image',11,'delete_tourimage'),(44,'Can view tour image',11,'view_tourimage'),(45,'Can add tour comment',12,'add_tourcomment'),(46,'Can change tour comment',12,'change_tourcomment'),(47,'Can delete tour comment',12,'delete_tourcomment'),(48,'Can view tour comment',12,'view_tourcomment'),(49,'Can add post comment',13,'add_postcomment'),(50,'Can change post comment',13,'change_postcomment'),(51,'Can delete post comment',13,'delete_postcomment'),(52,'Can view post comment',13,'view_postcomment'),(53,'Can add rating',14,'add_rating'),(54,'Can change rating',14,'change_rating'),(55,'Can delete rating',14,'delete_rating'),(56,'Can view rating',14,'view_rating'),(57,'Can add like comment',15,'add_likecomment'),(58,'Can change like comment',15,'change_likecomment'),(59,'Can delete like comment',15,'delete_likecomment'),(60,'Can view like comment',15,'view_likecomment'),(61,'Can add application',16,'add_application'),(62,'Can change application',16,'change_application'),(63,'Can delete application',16,'delete_application'),(64,'Can view application',16,'view_application'),(65,'Can add access token',17,'add_accesstoken'),(66,'Can change access token',17,'change_accesstoken'),(67,'Can delete access token',17,'delete_accesstoken'),(68,'Can view access token',17,'view_accesstoken'),(69,'Can add grant',18,'add_grant'),(70,'Can change grant',18,'change_grant'),(71,'Can delete grant',18,'delete_grant'),(72,'Can view grant',18,'view_grant'),(73,'Can add refresh token',19,'add_refreshtoken'),(74,'Can change refresh token',19,'change_refreshtoken'),(75,'Can delete refresh token',19,'delete_refreshtoken'),(76,'Can view refresh token',19,'view_refreshtoken'),(77,'Can add id token',20,'add_idtoken'),(78,'Can change id token',20,'change_idtoken'),(79,'Can delete id token',20,'delete_idtoken'),(80,'Can view id token',20,'view_idtoken');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-04-03 12:02:52.937432','1','Đà Lạt',1,'[{\"added\": {}}]',7,1),(2,'2023-04-03 12:03:32.580694','1','Đà Lạt',1,'[{\"added\": {}}]',9,1),(3,'2023-04-03 12:18:14.836439','1','TourImage object (1)',1,'[{\"added\": {}}]',11,1),(4,'2023-04-03 12:26:21.255102','1','Đà Lạt',2,'[{\"changed\": {\"fields\": [\"description\"]}}]',9,1),(5,'2023-04-03 12:40:06.831233','1','TourImage object (1)',2,'[{\"changed\": {\"fields\": [\"Value\"]}}]',11,1),(6,'2023-04-03 12:40:22.018937','1','TourImage object (1)',2,'[{\"changed\": {\"fields\": [\"Value\"]}}]',11,1),(7,'2023-04-03 12:54:57.476897','1','TourImage object (1)',2,'[{\"changed\": {\"fields\": [\"Value\"]}}]',11,1),(8,'2023-04-04 09:08:14.148556','2','Đà Lạt 2',1,'[{\"added\": {}}]',9,1),(9,'2023-04-04 09:08:33.892663','3','đà lạt 3',1,'[{\"added\": {}}]',9,1),(10,'2023-04-04 09:09:03.537290','4','Đà lạt 4',1,'[{\"added\": {}}]',9,1),(11,'2023-04-04 09:09:22.105563','5','Đà lạt 5',1,'[{\"added\": {}}]',9,1),(12,'2023-04-04 16:59:48.498144','1','TourImage object (1)',2,'[]',11,1),(13,'2023-04-04 17:00:33.831643','1','TourImage object (1)',2,'[{\"changed\": {\"fields\": [\"Value\"]}}]',11,1),(14,'2023-04-04 17:03:11.208431','1','Đà Lạt',2,'[{\"added\": {\"name\": \"tour image\", \"object\": \"TourImage object (2)\"}}]',9,1),(15,'2023-04-04 17:09:27.435337','5','Đà lạt 5',2,'[{\"added\": {\"name\": \"tour image\", \"object\": \"TourImage object (3)\"}}]',9,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(17,'oauth2_provider','accesstoken'),(16,'oauth2_provider','application'),(18,'oauth2_provider','grant'),(20,'oauth2_provider','idtoken'),(19,'oauth2_provider','refreshtoken'),(5,'sessions','session'),(15,'tourism','likecomment'),(7,'tourism','location'),(8,'tourism','post'),(13,'tourism','postcomment'),(14,'tourism','rating'),(9,'tourism','tour'),(12,'tourism','tourcomment'),(11,'tourism','tourimage'),(6,'tourism','user'),(10,'tourism','usertour');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-04-03 11:35:36.415853'),(2,'contenttypes','0002_remove_content_type_name','2023-04-03 11:35:36.513783'),(3,'auth','0001_initial','2023-04-03 11:35:36.717327'),(4,'auth','0002_alter_permission_name_max_length','2023-04-03 11:35:36.907968'),(5,'auth','0003_alter_user_email_max_length','2023-04-03 11:35:36.918939'),(6,'auth','0004_alter_user_username_opts','2023-04-03 11:35:36.936890'),(7,'auth','0005_alter_user_last_login_null','2023-04-03 11:35:36.948859'),(8,'auth','0006_require_contenttypes_0002','2023-04-03 11:35:36.952850'),(9,'auth','0007_alter_validators_add_error_messages','2023-04-03 11:35:36.958832'),(10,'auth','0008_alter_user_username_max_length','2023-04-03 11:35:36.964816'),(11,'auth','0009_alter_user_last_name_max_length','2023-04-03 11:35:36.971798'),(12,'auth','0010_alter_group_name_max_length','2023-04-03 11:35:36.987754'),(13,'auth','0011_update_proxy_permissions','2023-04-03 11:35:36.995733'),(14,'auth','0012_alter_user_first_name_max_length','2023-04-03 11:35:37.006703'),(15,'tourism','0001_initial','2023-04-03 11:35:38.073159'),(16,'admin','0001_initial','2023-04-03 11:35:38.199970'),(17,'admin','0002_logentry_remove_auto_add','2023-04-03 11:35:38.210907'),(18,'admin','0003_logentry_add_action_flag_choices','2023-04-03 11:35:38.223874'),(19,'sessions','0001_initial','2023-04-03 11:35:38.257018'),(20,'oauth2_provider','0001_initial','2023-04-04 08:39:36.249475'),(21,'oauth2_provider','0002_auto_20190406_1805','2023-04-04 08:39:36.326269'),(22,'oauth2_provider','0003_auto_20201211_1314','2023-04-04 08:39:36.393089'),(23,'oauth2_provider','0004_auto_20200902_2022','2023-04-04 08:39:36.767669'),(24,'oauth2_provider','0005_auto_20211222_2352','2023-04-04 08:39:36.832906'),(25,'oauth2_provider','0006_alter_application_client_secret','2023-04-04 08:39:36.861639'),(26,'tourism','0002_alter_tourimage_tour','2023-04-05 16:09:27.770919');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('dd1qtajhfr68b3cnv9w73s39frgyumgz','.eJxVjMEOwiAQRP-FsyFlC6549N5vIOwuSNXQpLQn47_bJj3ocea9mbcKcV1KWFuawyjqqow6_XYU-ZnqDuQR633SPNVlHknvij5o08Mk6XU73L-DElvZ1mi4J3TgckJrjLEMW4g5i3RZ4MLsRYQ6ZCYy2DuXY_aAQADe2rP6fAHt2zgo:1pjcVQ:MEbT5XUGz_HGHl8VX2vavd7Eg69uHdtSGRuS33mqZ7w','2023-04-18 08:59:08.384449');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_accesstoken`
--

DROP TABLE IF EXISTS `oauth2_provider_accesstoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_accesstoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext NOT NULL,
  `application_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `source_refresh_token_id` bigint DEFAULT NULL,
  `id_token_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `source_refresh_token_id` (`source_refresh_token_id`),
  UNIQUE KEY `id_token_id` (`id_token_id`),
  KEY `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_acce_id_token_id_85db651b_fk_oauth2_pr` FOREIGN KEY (`id_token_id`) REFERENCES `oauth2_provider_idtoken` (`id`),
  CONSTRAINT `oauth2_provider_acce_source_refresh_token_e66fbc72_fk_oauth2_pr` FOREIGN KEY (`source_refresh_token_id`) REFERENCES `oauth2_provider_refreshtoken` (`id`),
  CONSTRAINT `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_accesstoken`
--

LOCK TABLES `oauth2_provider_accesstoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_accesstoken` DISABLE KEYS */;
INSERT INTO `oauth2_provider_accesstoken` VALUES (1,'q8QCPhn2ONsqNWY15bVunC9Bu90Hid','2023-04-04 20:04:09.869861','read write',3,1,'2023-04-04 10:04:09.870860','2023-04-04 10:04:09.870860',NULL,NULL);
/*!40000 ALTER TABLE `oauth2_provider_accesstoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_application`
--

DROP TABLE IF EXISTS `oauth2_provider_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_application` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `client_id` varchar(100) NOT NULL,
  `redirect_uris` longtext NOT NULL,
  `client_type` varchar(32) NOT NULL,
  `authorization_grant_type` varchar(32) NOT NULL,
  `client_secret` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `skip_authorization` tinyint(1) NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `algorithm` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `client_id` (`client_id`),
  KEY `oauth2_provider_application_user_id_79829054_fk_tourism_user_id` (`user_id`),
  KEY `oauth2_provider_application_client_secret_53133678` (`client_secret`),
  CONSTRAINT `oauth2_provider_application_user_id_79829054_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_application`
--

LOCK TABLES `oauth2_provider_application` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_application` DISABLE KEYS */;
INSERT INTO `oauth2_provider_application` VALUES (3,'CFtpJvWfuMgVSke5un18W3t7Gs1jGtC8gzbpeWSN','','confidential','password','pbkdf2_sha256$390000$3TdBFZyyN9PcuLDXzSByhr$OGzdh6MR3pUl7vOk62Eg27jlD74WDVGsFP/aYecrgR0=','TourismApp',1,0,'2023-04-04 10:03:46.434389','2023-04-04 10:03:46.434389','');
/*!40000 ALTER TABLE `oauth2_provider_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_grant`
--

DROP TABLE IF EXISTS `oauth2_provider_grant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_grant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `expires` datetime(6) NOT NULL,
  `redirect_uri` longtext NOT NULL,
  `scope` longtext NOT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `code_challenge` varchar(128) NOT NULL,
  `code_challenge_method` varchar(10) NOT NULL,
  `nonce` varchar(255) NOT NULL,
  `claims` longtext NOT NULL DEFAULT (_utf8mb3''),
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_grant_user_id_e8f62af8_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_grant_user_id_e8f62af8_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_grant`
--

LOCK TABLES `oauth2_provider_grant` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_grant` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_provider_grant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_idtoken`
--

DROP TABLE IF EXISTS `oauth2_provider_idtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_idtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `jti` char(32) NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `application_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jti` (`jti`),
  KEY `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_idtoken_user_id_dd512b59_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_idtoken_user_id_dd512b59_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_idtoken`
--

LOCK TABLES `oauth2_provider_idtoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_idtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_provider_idtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_refreshtoken`
--

DROP TABLE IF EXISTS `oauth2_provider_refreshtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_refreshtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `access_token_id` bigint DEFAULT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `revoked` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `access_token_id` (`access_token_id`),
  UNIQUE KEY `oauth2_provider_refreshtoken_token_revoked_af8a5134_uniq` (`token`,`revoked`),
  KEY `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_refreshtoken_user_id_da837fce_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_refr_access_token_id_775e84e8_fk_oauth2_pr` FOREIGN KEY (`access_token_id`) REFERENCES `oauth2_provider_accesstoken` (`id`),
  CONSTRAINT `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_refreshtoken_user_id_da837fce_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_refreshtoken`
--

LOCK TABLES `oauth2_provider_refreshtoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_refreshtoken` DISABLE KEYS */;
INSERT INTO `oauth2_provider_refreshtoken` VALUES (1,'NjCagMbvmOYDTKMxpNraAX41mEAKYY',1,3,1,'2023-04-04 10:04:09.872854','2023-04-04 10:04:09.872854',NULL);
/*!40000 ALTER TABLE `oauth2_provider_refreshtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_likecomment`
--

DROP TABLE IF EXISTS `tourism_likecomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_likecomment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `liked` tinyint(1) NOT NULL,
  `post_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tourism_likecomment_post_id_user_id_2a60b319_uniq` (`post_id`,`user_id`),
  KEY `tourism_likecomment_user_id_02e506a2_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `tourism_likecomment_post_id_9b30d9bd_fk_tourism_post_id` FOREIGN KEY (`post_id`) REFERENCES `tourism_post` (`id`),
  CONSTRAINT `tourism_likecomment_user_id_02e506a2_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_likecomment`
--

LOCK TABLES `tourism_likecomment` WRITE;
/*!40000 ALTER TABLE `tourism_likecomment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_likecomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_location`
--

DROP TABLE IF EXISTS `tourism_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_location` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_location`
--

LOCK TABLES `tourism_location` WRITE;
/*!40000 ALTER TABLE `tourism_location` DISABLE KEYS */;
INSERT INTO `tourism_location` VALUES (1,'2023-04-03 12:02:52.935544','2023-04-03 12:02:52.935544',1,'Đà Lạt');
/*!40000 ALTER TABLE `tourism_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_post`
--

DROP TABLE IF EXISTS `tourism_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_post` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `number_like` int NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_post_user_id_59a5fe26_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `tourism_post_user_id_59a5fe26_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_post`
--

LOCK TABLES `tourism_post` WRITE;
/*!40000 ALTER TABLE `tourism_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_postcomment`
--

DROP TABLE IF EXISTS `tourism_postcomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_postcomment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `content` varchar(255) NOT NULL,
  `post_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_postcomment_post_id_ee4dea31_fk_tourism_post_id` (`post_id`),
  KEY `tourism_postcomment_user_id_7c6b9cdd_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `tourism_postcomment_post_id_ee4dea31_fk_tourism_post_id` FOREIGN KEY (`post_id`) REFERENCES `tourism_post` (`id`),
  CONSTRAINT `tourism_postcomment_user_id_7c6b9cdd_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_postcomment`
--

LOCK TABLES `tourism_postcomment` WRITE;
/*!40000 ALTER TABLE `tourism_postcomment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_postcomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_rating`
--

DROP TABLE IF EXISTS `tourism_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_rating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `value` smallint NOT NULL,
  `tour_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tourism_rating_tour_id_user_id_3e7b09a5_uniq` (`tour_id`,`user_id`),
  KEY `tourism_rating_user_id_89598a8f_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `tourism_rating_tour_id_63252a1a_fk_tourism_tour_id` FOREIGN KEY (`tour_id`) REFERENCES `tourism_tour` (`id`),
  CONSTRAINT `tourism_rating_user_id_89598a8f_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_rating`
--

LOCK TABLES `tourism_rating` WRITE;
/*!40000 ALTER TABLE `tourism_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_tour`
--

DROP TABLE IF EXISTS `tourism_tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_tour` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `duration` int NOT NULL,
  `children_price` decimal(10,2) NOT NULL,
  `adult_price` decimal(10,2) NOT NULL,
  `description` longtext NOT NULL,
  `number_rate` double DEFAULT NULL,
  `max_person` int NOT NULL,
  `location_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_tour_location_id_c419b344_fk_tourism_location_id` (`location_id`),
  CONSTRAINT `tourism_tour_location_id_c419b344_fk_tourism_location_id` FOREIGN KEY (`location_id`) REFERENCES `tourism_location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_tour`
--

LOCK TABLES `tourism_tour` WRITE;
/*!40000 ALTER TABLE `tourism_tour` DISABLE KEYS */;
INSERT INTO `tourism_tour` VALUES (1,'2023-04-03 12:03:32.570723','2023-04-04 17:03:11.198456',1,'Đà Lạt',3,1000000.00,2000000.00,'<p>đi Đ&agrave; Lạt<img alt=\"\" src=\"/static/ckeditors/tour_image/2023/04/03/175682837_303753974483025_9052929261108929132_n-copy-2.jpg\" /></p>',3,5,1),(2,'2023-04-04 09:08:14.139580','2023-04-04 09:08:14.139580',1,'Đà Lạt 2',4,10000000.00,10000000.00,'<p>aaa</p>',0,5,1),(3,'2023-04-04 09:08:33.891665','2023-04-04 09:08:33.891665',1,'đà lạt 3',3,1000000.00,1000000.00,'<p>bbbbb</p>',0,5,1),(4,'2023-04-04 09:09:03.536293','2023-04-04 09:09:03.536293',1,'Đà lạt 4',1,10000000.00,10000000.00,'<p>aaaa</p>',0,10,1),(5,'2023-04-04 09:09:22.105563','2023-04-04 17:09:27.427245',1,'Đà lạt 5',5,1000000.00,1000000.00,'<p>111</p>',0,12,1);
/*!40000 ALTER TABLE `tourism_tour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_tourcomment`
--

DROP TABLE IF EXISTS `tourism_tourcomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_tourcomment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `content` varchar(255) NOT NULL,
  `tour_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_tourcomment_tour_id_b38db559_fk_tourism_tour_id` (`tour_id`),
  KEY `tourism_tourcomment_user_id_cd888e95_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `tourism_tourcomment_tour_id_b38db559_fk_tourism_tour_id` FOREIGN KEY (`tour_id`) REFERENCES `tourism_tour` (`id`),
  CONSTRAINT `tourism_tourcomment_user_id_cd888e95_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_tourcomment`
--

LOCK TABLES `tourism_tourcomment` WRITE;
/*!40000 ALTER TABLE `tourism_tourcomment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_tourcomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_tourimage`
--

DROP TABLE IF EXISTS `tourism_tourimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_tourimage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `value` varchar(100) DEFAULT NULL,
  `tour_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_tourimage_tour_id_f60d50fb_fk_tourism_tour_id` (`tour_id`),
  CONSTRAINT `tourism_tourimage_tour_id_f60d50fb_fk_tourism_tour_id` FOREIGN KEY (`tour_id`) REFERENCES `tourism_tour` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_tourimage`
--

LOCK TABLES `tourism_tourimage` WRITE;
/*!40000 ALTER TABLE `tourism_tourimage` DISABLE KEYS */;
INSERT INTO `tourism_tourimage` VALUES (1,'2023-04-03 12:18:14.832431','2023-04-04 17:00:33.827653',1,'tour_image/2023/04/meo1.png',1),(2,'2023-04-04 17:03:11.205440','2023-04-04 17:03:11.205440',1,'tour_image/2023/04/meo2.png',1),(3,'2023-04-04 17:09:27.433343','2023-04-04 17:09:27.433343',1,'tour_image/2023/04/meo9.png',5);
/*!40000 ALTER TABLE `tourism_tourimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_user`
--

DROP TABLE IF EXISTS `tourism_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_user`
--

LOCK TABLES `tourism_user` WRITE;
/*!40000 ALTER TABLE `tourism_user` DISABLE KEYS */;
INSERT INTO `tourism_user` VALUES (1,'pbkdf2_sha256$390000$NwU53B2AmPw4zCxXxIvTHI$c9lb/JPfQhUO3wm9AtrUKOdV2rRWs0L0+hO5BOvg8ZE=','2023-04-04 08:59:08.380460',1,'admin','','','admin@gmail.com',1,1,'2023-04-03 11:37:08.928238','');
/*!40000 ALTER TABLE `tourism_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_user_groups`
--

DROP TABLE IF EXISTS `tourism_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tourism_user_groups_user_id_group_id_95c96da1_uniq` (`user_id`,`group_id`),
  KEY `tourism_user_groups_group_id_9dc4fffb_fk_auth_group_id` (`group_id`),
  CONSTRAINT `tourism_user_groups_group_id_9dc4fffb_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `tourism_user_groups_user_id_77ebaec2_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_user_groups`
--

LOCK TABLES `tourism_user_groups` WRITE;
/*!40000 ALTER TABLE `tourism_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_user_user_permissions`
--

DROP TABLE IF EXISTS `tourism_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tourism_user_user_permis_user_id_permission_id_0c94487b_uniq` (`user_id`,`permission_id`),
  KEY `tourism_user_user_pe_permission_id_f27188f6_fk_auth_perm` (`permission_id`),
  CONSTRAINT `tourism_user_user_pe_permission_id_f27188f6_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `tourism_user_user_pe_user_id_1d2bd2de_fk_tourism_u` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_user_user_permissions`
--

LOCK TABLES `tourism_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `tourism_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourism_usertour`
--

DROP TABLE IF EXISTS `tourism_usertour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tourism_usertour` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `number_adult` int NOT NULL,
  `number_children` int NOT NULL,
  `date_start` datetime(6) NOT NULL,
  `date_finish` datetime(6) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` int NOT NULL,
  `tour_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_usertour_tour_id_33a09a8b_fk_tourism_tour_id` (`tour_id`),
  KEY `tourism_usertour_user_id_0cc2e016_fk_tourism_user_id` (`user_id`),
  CONSTRAINT `tourism_usertour_tour_id_33a09a8b_fk_tourism_tour_id` FOREIGN KEY (`tour_id`) REFERENCES `tourism_tour` (`id`),
  CONSTRAINT `tourism_usertour_user_id_0cc2e016_fk_tourism_user_id` FOREIGN KEY (`user_id`) REFERENCES `tourism_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_usertour`
--

LOCK TABLES `tourism_usertour` WRITE;
/*!40000 ALTER TABLE `tourism_usertour` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourism_usertour` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-05 23:14:34
