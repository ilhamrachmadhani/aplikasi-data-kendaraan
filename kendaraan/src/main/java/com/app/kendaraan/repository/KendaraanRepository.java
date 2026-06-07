package com.app.kendaraan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.kendaraan.model.Kendaraan;

@Repository
public interface KendaraanRepository extends JpaRepository<Kendaraan, String> {

    List<Kendaraan>  findByNoRegistrasiContainingAndNamaPemilikContaining(String noRg, String nama);
    
}
