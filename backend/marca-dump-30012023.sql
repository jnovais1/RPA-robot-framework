-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('48b353aa-aeb0-4940-8dd3-d63d317fb998','b9d7887388c5b992064fdc59e019f8acf077fd0b794f36147719d1f05b81a1a8','2022-09-02 17:01:40.053','20220728171609_marca1',NULL,NULL,'2022-09-02 17:01:39.334',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;


-- Dump completed on 2023-01-30 17:32:25


-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `area_name_key` (`name`),
  KEY `fk_area_user1_idx` (`user_id`),
  CONSTRAINT `fk_area_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (14,14,'Portaria e Balança','','2022-11-16 17:42:48','2022-11-16 17:42:48'),(34,14,'ETE Chorume','','2022-11-16 18:05:47','2022-11-16 18:05:47'),(44,14,'Tratamento Térmico de Resíduos','Incinerador/Autoclave','2022-11-16 18:06:43','2022-11-16 18:06:43');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;


-- Dump completed on 2023-01-30 17:32:37
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log


--
-- Table structure for table `area_video`
--

DROP TABLE IF EXISTS `area_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_area_video_area_idx` (`area_id`),
  KEY `fk_area_video_user1_idx` (`user_id`),
  KEY `fk_area_video_video1_idx` (`video_id`),
  CONSTRAINT `fk_area_video_area` FOREIGN KEY (`area_id`) REFERENCES `area` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_area_video_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_area_video_video1` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=515 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_video`
--

LOCK TABLES `area_video` WRITE;
/*!40000 ALTER TABLE `area_video` DISABLE KEYS */;
INSERT INTO `area_video` VALUES (4,14,4,14,1,'2022-11-16 17:43:12','2022-11-16 17:43:12'),(14,14,14,14,1,'2022-11-16 18:04:47','2022-11-16 18:04:47'),(24,14,24,14,1,'2022-11-16 18:04:50','2022-11-16 18:04:50'),(34,14,34,14,1,'2022-11-16 18:04:54','2022-11-16 18:04:54'),(44,14,44,14,1,'2022-11-16 18:04:57','2022-11-16 18:04:57'),(54,14,54,14,1,'2022-11-16 18:05:00','2022-11-16 18:05:00'),(64,14,64,14,1,'2022-11-16 18:05:02','2022-11-16 18:05:02'),(74,14,74,14,1,'2022-11-16 18:05:05','2022-11-16 18:05:05'),(84,14,84,14,1,'2022-11-16 18:05:08','2022-11-16 18:05:08'),(114,34,4,14,1,'2022-11-16 18:09:14','2022-11-16 18:09:14'),(124,34,14,14,1,'2022-11-16 18:09:17','2022-11-16 18:09:17'),(134,34,24,14,1,'2022-11-16 18:09:22','2022-11-16 18:09:22'),(144,34,34,14,1,'2022-11-16 18:09:25','2022-11-16 18:09:25'),(154,34,44,14,1,'2022-11-16 18:09:30','2022-11-16 18:09:30'),(164,34,54,14,1,'2022-11-16 18:10:20','2022-11-16 18:10:20'),(174,34,64,14,1,'2022-11-16 18:10:34','2022-11-16 18:10:34'),(184,34,74,14,1,'2022-11-16 18:10:57','2022-11-16 18:10:57'),(194,34,84,14,1,'2022-11-16 18:11:00','2022-11-16 18:11:00'),(204,44,4,14,1,'2022-11-16 18:11:23','2022-11-16 18:11:23'),(214,44,14,14,1,'2022-11-16 18:11:29','2022-11-16 18:11:29'),(224,44,24,14,1,'2022-11-16 18:11:36','2022-11-16 18:11:36'),(234,44,34,14,1,'2022-11-16 18:11:40','2022-11-16 18:11:40'),(244,44,44,14,1,'2022-11-16 18:11:48','2022-11-16 18:11:48'),(254,44,54,14,1,'2022-11-16 18:12:00','2022-11-16 18:12:00'),(264,44,64,14,1,'2022-11-16 18:12:11','2022-11-16 18:12:11'),(274,44,74,14,1,'2022-11-16 18:12:22','2022-11-16 18:12:22'),(284,44,84,14,1,'2022-11-16 18:12:25','2022-11-16 18:12:25'),(294,14,94,14,1,'2022-11-16 18:16:33','2022-11-16 18:16:33'),(304,34,94,14,1,'2022-11-16 18:16:43','2022-11-16 18:16:43'),(314,44,94,14,1,'2022-11-16 18:16:52','2022-11-16 18:16:52'),(324,14,104,14,1,'2022-11-16 18:19:36','2022-11-16 18:19:36'),(334,14,114,14,1,'2022-11-16 18:19:38','2022-11-16 18:19:38'),(344,14,124,14,1,'2022-11-16 18:19:41','2022-11-16 18:19:41'),(354,34,114,14,1,'2022-11-16 18:22:41','2022-11-16 18:22:41'),(364,34,124,14,1,'2022-11-16 18:22:43','2022-11-16 18:22:43'),(374,44,114,14,1,'2022-11-16 18:25:42','2022-11-16 18:25:42'),(384,44,124,14,1,'2022-11-16 18:25:45','2022-11-16 18:25:45'),(394,14,144,14,1,'2022-11-22 15:06:14','2022-11-22 15:06:14'),(404,14,154,14,1,'2022-11-22 15:06:18','2022-11-22 15:06:18'),(414,34,144,14,1,'2022-11-22 15:06:29','2022-11-22 15:06:29'),(424,34,154,14,1,'2022-11-22 15:06:33','2022-11-22 15:06:33'),(434,44,144,14,1,'2022-11-22 15:06:43','2022-11-22 15:06:43'),(444,44,154,14,1,'2022-11-22 15:06:45','2022-11-22 15:06:45'),(454,14,164,14,1,'2022-11-22 15:08:10','2022-11-22 15:08:10'),(464,34,164,14,1,'2022-11-22 15:08:21','2022-11-22 15:08:21'),(474,44,164,14,1,'2022-11-22 15:08:29','2022-11-22 15:08:29'),(484,14,134,14,1,'2022-11-22 15:10:12','2022-11-22 15:10:12'),(494,34,134,14,1,'2022-11-22 15:10:21','2022-11-22 15:10:21'),(504,44,134,14,1,'2022-11-22 15:10:30','2022-11-22 15:10:30'),(514,14,174,14,1,'2022-11-22 15:12:05','2022-11-22 15:12:05');
/*!40000 ALTER TABLE `area_video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;


-- Dump completed on 2023-01-30 17:32:44

-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log


--
-- Table structure for table `form`
--

DROP TABLE IF EXISTS `form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` text COLLATE utf8mb4_unicode_ci,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `changed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_form_user1_idx` (`user_id`),
  CONSTRAINT `fk_form_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form`
--

LOCK TABLES `form` WRITE;
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
INSERT INTO `form` VALUES (4,14,'REGISTRO DE ANOMALIA NO PRODUTTIVO','https://app.produttivo.com.br/r/6522eb9d-3851-427a-b97c-55f3bfa6ffc7?t=XwHVh0DQbXuF1PAS3rlD3LYiAc8fk7QqPMH7h2m3ZWbY1nqsp3fEDQ','','2022-11-11 18:37:17','2022-11-11 18:37:17'),(14,14,'ETE CHORUME','https://app.produttivo.com.br/r/8430f596-2f10-40e2-bbf4-2b81492fb086?t=-t24vAJBYGZPCYhQxUPvtZ2RS12JH1847qgbfGF4c7agbqgC1OjoNA','','2022-11-11 18:55:42','2022-11-11 18:55:42'),(24,14,'ANOMALIA AUTOCLAVE','https://app.produttivo.com.br/r/0bc0df85-d09e-44f2-aaab-602cb95bd4a5?t=LbjP2EtqLgrnDTiVXjpdz0JQGQDSdwXgeEUw3O6JkEeXENqzGOv3_g','','2022-11-11 19:01:31','2022-11-11 19:01:31');
/*!40000 ALTER TABLE `form` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;



-- Dump completed on 2023-01-30 17:32:41
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(90) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (14,'admin','$2b$10$mwcTXfcj2U2cSU5SXfGhXOWnhp/UhGOE7F0gjNk1TgGCr7Dcm2HVa','Administrador','admin@admin.com','2022-09-02 19:57:08','2022-09-02 19:57:08');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;


-- Dump completed on 2023-01-30 17:32:29
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log


--
-- Table structure for table `user_1`
--

DROP TABLE IF EXISTS `user_1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_1` (
  `username` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `user_1_username_key` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_1`
--

LOCK TABLES `user_1` WRITE;
/*!40000 ALTER TABLE `user_1` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;


-- Dump completed on 2023-01-30 17:32:33
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_c993a39ccde0963
-- ------------------------------------------------------
-- Server version	5.6.50-log


--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `link` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_video_user1_idx` (`user_id`),
  CONSTRAINT `fk_video_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (4,14,'BOTAS DE SEGURANÇA','Em dias chuvosos ou locais com muita água, troque as botinas comuns pelas botas de PVC. Se liga na dica!!','https://www.youtube.com/watch?v=HD5J8MheS58','2022-11-11 18:30:11','2022-11-11 18:30:11'),(14,14,'MÁSCARA DE SEGURANÇA PFF2','Por que você precisa usar máscara no trabalho mesmo depois da pandemia? Se liga na dica!','https://www.youtube.com/watch?v=qXlVa9XiYQ8','2022-11-11 19:08:07','2022-11-11 19:08:07'),(24,14,'PROTEÇÃO AUDITIVA','No ambiente de trabalho, você pode contar com o auxílio do protetor auricular ou dispositivo de proteção auditiva. Se liga na dica!','https://www.youtube.com/watch?v=IvY4d2vbqMU','2022-11-11 19:08:58','2022-11-11 19:08:58'),(34,14,'HIGIENE PESSOAL','Gripe, conjuntivite, diarreia, alergia, virose, covid-19. Todas são doenças que podem ser transmitidas por causa da falta de higiene. Se liga na dica!','https://www.youtube.com/watch?v=TU3HEmZ_azY&feature=youtu.be','2022-11-11 19:09:43','2022-11-11 19:09:43'),(44,14,'COLETA SELETIVA','Cada resíduo tem uma forma de beneficiamento diferente e, por isso, é tão importante separá-los já no descarte. Se liga na dica!','https://www.youtube.com/watch?v=qgZ624AM6u8&feature=youtu.be','2022-11-11 19:10:57','2022-11-11 19:10:57'),(54,14,'DOCUMENTAÇÃO ATUALIZADA','Ter toda a documentação atualizada é importante para você, e o seu bem-estar é importante para nós. Se liga na dica!','https://www.youtube.com/watch?v=U0RaKhI_CL8&feature=youtu.be','2022-11-11 19:11:39','2022-11-11 19:11:39'),(64,14,'PROTOCOLO DE EMERGÊNCIA','Você sabe qual é o protocolo correto de emergência? Se liga na dica!','https://www.youtube.com/watch?v=B4mRKaiWa4g&feature=youtu.be','2022-11-11 19:12:15','2022-11-11 19:12:15'),(74,14,'ALIMENTAÇÃO SEGURA','Quer se manter saudável e se alimentar bem para ter bastante energia e disposição no dia a dia? Se liga na dica!','https://www.youtube.com/watch?v=HXCtqehyr1k','2022-11-11 19:12:59','2022-11-11 19:12:59'),(84,14,'ERGONOMIA','Ergonomia é uma série de práticas que garantem o seu bem-estar, seja mental ou físico aplicadas ao trabalho. Se liga na dica!','https://www.youtube.com/watch?v=9jnLD7KRDcE','2022-11-11 19:13:31','2022-11-11 19:13:31'),(94,14,'CONSUMO CONSCIENTE','É preciso REPENSAR todos os nossos hábitos e avaliar o que pode ser feito para o bem do planeta. Se liga na dica!','https://www.youtube.com/watch?v=1505ji-Ht-M&ab_channel=norminha','2022-11-16 18:16:14','2022-11-16 18:16:14'),(104,14,'BALANÇA DE CAMINHÕES','Para evitar qualquer irregularidade, o setor comercial também é informado sobre toda e qualquer pesagem. Se liga na dica!','https://www.youtube.com/watch?v=zrdkK8EJgJU&ab_channel=norminha','2022-11-16 18:17:38','2022-11-16 18:17:38'),(114,14,'NOSSOS VALORES','Nós da Marca Ambiental acreditamos em pessoas. Pessoas com potencial, com propósito. Essa é a nossa marca!','https://www.youtube.com/watch?v=n7d9Bcwy6F8&ab_channel=norminha','2022-11-16 18:18:33','2022-11-16 18:18:33'),(124,14,'PAE - PLANO DE ATENDIMENTO A EMERGÊNCIAS','Além de todos os cuidados que temos com a prevenção de riscos, nós também contamos com o PAE. Se liga na dica!!','https://www.youtube.com/watch?v=CeOQ_OrNMxI&ab_channel=norminha','2022-11-16 18:19:09','2022-11-16 18:19:09'),(134,14,'POLÍTICA DA QUALIDADE','Na Marca Ambiental, temos um compromisso com o meio ambiente. Se liga na dica!','https://www.youtube.com/watch?v=HVDDS5qywCk','2022-11-22 14:53:12','2022-11-22 14:53:12'),(144,14,'CÓDIGO DE VESTIMENTA','O código de vestimenta da Marca Ambiental, além de passar credibilidade, também tem razões de segurança. Se liga na dica!','https://www.youtube.com/watch?v=3dHwtwN4vqU&ab_channel=norminha','2022-11-22 15:03:38','2022-11-22 15:03:38'),(154,14,'REGRAS DE CIRCULAÇÃO','No trânsito, existem para motoristas e para pedestres, certo? Então se liga na dica!','https://www.youtube.com/watch?v=Ndom9eC2JLs&ab_channel=norminha','2022-11-22 15:05:28','2022-11-22 15:05:28'),(164,14,'ORGANIZAÇÃO NO TRABALHO','Quando se tem tudo organizado, você garante agilidade para o seu trabalho e de seus colegas. Se liga na dica!','https://www.youtube.com/watch?v=BnwQH1qg0s4&ab_channel=norminha','2022-11-22 15:07:27','2022-11-22 15:07:27'),(174,14,'LAAI - PROCEDIMENTO BALANÇA','Nossa balança é rigorosamente analisada constantemente para evitar quaisquer riscos. Se liga na dica!','https://www.youtube.com/watch?v=WN-sWs8fRGc&ab_channel=norminha','2022-11-22 15:11:32','2022-11-22 15:11:32');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;



-- Dump completed on 2023-01-30 17:32:48
