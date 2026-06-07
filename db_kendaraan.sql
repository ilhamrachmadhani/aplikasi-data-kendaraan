-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_kendaraan
CREATE DATABASE IF NOT EXISTS `db_kendaraan` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `db_kendaraan`;

-- Dumping structure for table db_kendaraan.kendaraan
CREATE TABLE IF NOT EXISTS `kendaraan` (
  `no_registrasi` varchar(20) NOT NULL,
  `nama_pemilik` varchar(100) NOT NULL,
  `alamat` text DEFAULT NULL,
  `merk_kendaraan` varchar(50) DEFAULT NULL,
  `tahun_pembuatan` int(11) DEFAULT NULL,
  `kapasitas_silinder` int(11) DEFAULT NULL,
  `warna_kendaraan` varchar(20) DEFAULT NULL,
  `bahan_bakar` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`no_registrasi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_kendaraan.kendaraan: ~2 rows (approximately)
INSERT INTO `kendaraan` (`no_registrasi`, `nama_pemilik`, `alamat`, `merk_kendaraan`, `tahun_pembuatan`, `kapasitas_silinder`, `warna_kendaraan`, `bahan_bakar`) VALUES
	('B AJBI EB', 'FAHRY', 'JALAN HADI', 'PCX', 2025, 200, 'Merah', 'bensin'),
	('B J12FG AS', 'ILHAM', 'jlaan', 'NMAX', 2022, 300, 'Hitam', 'bensin');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
