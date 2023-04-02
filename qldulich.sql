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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add permission',1,'add_permission'),(2,'Can change permission',1,'change_permission'),(3,'Can delete permission',1,'delete_permission'),(4,'Can view permission',1,'view_permission'),(5,'Can add group',2,'add_group'),(6,'Can change group',2,'change_group'),(7,'Can delete group',2,'delete_group'),(8,'Can view group',2,'view_group'),(9,'Can add content type',3,'add_contenttype'),(10,'Can change content type',3,'change_contenttype'),(11,'Can delete content type',3,'delete_contenttype'),(12,'Can view content type',3,'view_contenttype'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add location',5,'add_location'),(18,'Can change location',5,'change_location'),(19,'Can delete location',5,'delete_location'),(20,'Can view location',5,'view_location'),(21,'Can add post',6,'add_post'),(22,'Can change post',6,'change_post'),(23,'Can delete post',6,'delete_post'),(24,'Can view post',6,'view_post'),(25,'Can add tour',7,'add_tour'),(26,'Can change tour',7,'change_tour'),(27,'Can delete tour',7,'delete_tour'),(28,'Can view tour',7,'view_tour'),(29,'Can add user tour',8,'add_usertour'),(30,'Can change user tour',8,'change_usertour'),(31,'Can delete user tour',8,'delete_usertour'),(32,'Can view user tour',8,'view_usertour'),(33,'Can add tour image',9,'add_tourimage'),(34,'Can change tour image',9,'change_tourimage'),(35,'Can delete tour image',9,'delete_tourimage'),(36,'Can view tour image',9,'view_tourimage'),(37,'Can add tour comment',10,'add_tourcomment'),(38,'Can change tour comment',10,'change_tourcomment'),(39,'Can delete tour comment',10,'delete_tourcomment'),(40,'Can view tour comment',10,'view_tourcomment'),(41,'Can add post comment',11,'add_postcomment'),(42,'Can change post comment',11,'change_postcomment'),(43,'Can delete post comment',11,'delete_postcomment'),(44,'Can view post comment',11,'view_postcomment'),(45,'Can add rating',12,'add_rating'),(46,'Can change rating',12,'change_rating'),(47,'Can delete rating',12,'delete_rating'),(48,'Can view rating',12,'view_rating'),(49,'Can add like comment',13,'add_likecomment'),(50,'Can change like comment',13,'change_likecomment'),(51,'Can delete like comment',13,'delete_likecomment'),(52,'Can view like comment',13,'view_likecomment');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (2,'auth','group'),(1,'auth','permission'),(3,'contenttypes','contenttype'),(13,'tourism','likecomment'),(5,'tourism','location'),(6,'tourism','post'),(11,'tourism','postcomment'),(12,'tourism','rating'),(7,'tourism','tour'),(10,'tourism','tourcomment'),(9,'tourism','tourimage'),(4,'tourism','user'),(8,'tourism','usertour');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-04-02 19:42:26.359897'),(2,'contenttypes','0002_remove_content_type_name','2023-04-02 19:42:26.464526'),(3,'auth','0001_initial','2023-04-02 19:42:26.725476'),(4,'auth','0002_alter_permission_name_max_length','2023-04-02 19:42:26.785239'),(5,'auth','0003_alter_user_email_max_length','2023-04-02 19:42:26.791823'),(6,'auth','0004_alter_user_username_opts','2023-04-02 19:42:26.798818'),(7,'auth','0005_alter_user_last_login_null','2023-04-02 19:42:26.804764'),(8,'auth','0006_require_contenttypes_0002','2023-04-02 19:42:26.810112'),(9,'auth','0007_alter_validators_add_error_messages','2023-04-02 19:42:26.816096'),(10,'auth','0008_alter_user_username_max_length','2023-04-02 19:42:26.824077'),(11,'auth','0009_alter_user_last_name_max_length','2023-04-02 19:42:26.830061'),(12,'auth','0010_alter_group_name_max_length','2023-04-02 19:42:26.845020'),(13,'auth','0011_update_proxy_permissions','2023-04-02 19:42:26.852003'),(14,'auth','0012_alter_user_first_name_max_length','2023-04-02 19:42:26.858014'),(15,'tourism','0001_initial','2023-04-02 19:42:28.017560');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_location`
--

LOCK TABLES `tourism_location` WRITE;
/*!40000 ALTER TABLE `tourism_location` DISABLE KEYS */;
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
  `description` longtext NOT NULL,
  `location_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tourism_tour_location_id_c419b344_fk_tourism_location_id` (`location_id`),
  CONSTRAINT `tourism_tour_location_id_c419b344_fk_tourism_location_id` FOREIGN KEY (`location_id`) REFERENCES `tourism_location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_tour`
--

LOCK TABLES `tourism_tour` WRITE;
/*!40000 ALTER TABLE `tourism_tour` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_tourimage`
--

LOCK TABLES `tourism_tourimage` WRITE;
/*!40000 ALTER TABLE `tourism_tourimage` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourism_user`
--

LOCK TABLES `tourism_user` WRITE;
/*!40000 ALTER TABLE `tourism_user` DISABLE KEYS */;
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

-- Dump completed on 2023-04-03  2:44:13
