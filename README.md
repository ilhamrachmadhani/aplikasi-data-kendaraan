# 🚗 Aplikasi Data Kendaraan

![Java](https://img.shields.io/badge/Java-21-orange.svg) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen.svg) ![MySQL](https://img.shields.io/badge/MySQL-Database-blue.svg) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)

Aplikasi Data Kendaraan adalah sistem manajemen informasi *full-stack* yang dikembangkan sebagai bagian dari *Technical Test*[cite: 1]. Aplikasi ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data kendaraan dengan antarmuka yang responsif dan intuitif[cite: 1].

## ✨ Fitur Utama

Aplikasi ini telah memenuhi seluruh *requirements* yang diminta:
* **Monitoring Data:** Menampilkan seluruh data kendaraan dalam bentuk *grid/table* yang rapi[cite: 1].
* **Pencarian Cepat:** Fitur *search* berdasarkan **No Registrasi** dan **Nama Pemilik**[cite: 1].
* **Manajemen Data (CRUD):** 
  * Tambah data kendaraan baru beserta validasi input[cite: 1].
  * Edit data kendaraan yang sudah ada[cite: 1].
  * Hapus data dengan konfirmasi keamanan (*modal confirmation*)[cite: 1].
  * Lihat detail data kendaraan (mode *Read-Only*)[cite: 1].

## 🛠️ Tech Stack

**Backend:**
* Java 21[cite: 1]
* Spring Boot (Web, Data JPA)[cite: 1]
* Hibernate (ORM)[cite: 1]
* MySQL Database[cite: 1]

**Frontend:**
* HTML5 & CSS3[cite: 1]
* JavaScript & jQuery (AJAX Handling)[cite: 1]
* Bootstrap 5.3 (UI Framework)[cite: 1]

---

## 🚀 Cara Menjalankan Aplikasi Lokal (Installation Guide)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer Anda.

### Prasyarat:
* Java Development Kit (JDK) 21 atau lebih baru.
* MySQL Server (XAMPP / Laragon / MySQL Workbench).
* Maven.

### Langkah Instalasi:

**1. Persiapan Database**
* Buka MySQL (melalui phpMyAdmin atau DBeaver).
* Buat database baru dengan nama `db_kendaraan`.
* Import file `db_kendaraan.sql` yang telah disediakan di root direktori repositori ini ke dalam database tersebut.

**2. Konfigurasi Aplikasi**
* Buka file `src/main/resources/application.properties`.
* Sesuaikan kredensial database Anda jika diperlukan:
```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/db_kendaraan
  spring.datasource.username=root
  spring.datasource.password=
  server.port=8081
