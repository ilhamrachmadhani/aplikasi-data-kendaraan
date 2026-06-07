package com.app.kendaraan.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "kendaraan")
public class Kendaraan {
    
    @Id
    @Column(name = "no_registrasi", length = 20)
    private String noRegistrasi;

    @Column(name = "nama_pemilik", nullable = false, length = 100)
    private String namaPemilik;

    @Column(name = "merk_kendaraan", nullable = false, length =  50)
    private String merkKendaraan;

    @Column(name = "alamat", columnDefinition = "TEXT")
    private String alamat;

    @Column(name = "warna_kendaraan", length = 30)
    private String warnaKendaraan;

    @Column(name = "kapasitas_silinder")
    private Integer kapasitasSilinders;

    @Column(name = "tahun_pembuatan")
    private Integer  tahunPembuatan;

    @Column(name = "bahan_bakar", length = 30)
    private String bahanBakar;


    //generate getter setter

    public String getNoRegistrasi() {return noRegistrasi;}
    public void setNoRegistrasi(String noRegistrasi) {this.noRegistrasi = noRegistrasi;}

    public String getNamaPemilik() {return namaPemilik;}
    public void setNamaPemilik(String namaPemilik) {this.namaPemilik = namaPemilik;}

    public String getMerkKendaraan() {return merkKendaraan;}
    public void setMerkKendaraan(String merkKendaraan) {this.merkKendaraan = merkKendaraan;}

    public String getAlamat() {return alamat;}
    public void setAlamat(String  alamat) {this.alamat = alamat;}

    public String getWarnaKendaraan() {return warnaKendaraan;}
    public void setWarnaKendaraan(String warnaKendaraan) {this.warnaKendaraan = warnaKendaraan;}

    public Integer getKapasitasSilinder() {return kapasitasSilinders;}
    public void setKapasitasSilinder(Integer kapasitasSilinders) {this.kapasitasSilinders = kapasitasSilinders;}

    public Integer getTahunPembuatan() {return tahunPembuatan;}
    public void setTahunPembuatan(Integer tahunPembuatan) {this.tahunPembuatan = tahunPembuatan;}

    public String getBahanBakar() {return bahanBakar;}
    public void setBahanBakar(String bahanBakar) {this.bahanBakar = bahanBakar;}




}
