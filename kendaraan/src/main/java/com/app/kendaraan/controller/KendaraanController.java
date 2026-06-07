package com.app.kendaraan.controller;

import com.app.kendaraan.model.Kendaraan;
import com.app.kendaraan.repository.KendaraanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/kendaraan")
@CrossOrigin(origins = "*") 
public class KendaraanController {

    @Autowired
    private KendaraanRepository kendaraanRepo;

    @GetMapping("/list")
    public List<Kendaraan> getKendaraanList(
            @RequestParam(required = false, defaultValue = "") String noReg,
            @RequestParam(required = false, defaultValue = "") String nama) {
        
       
        return kendaraanRepo.findByNoRegistrasiContainingAndNamaPemilikContaining(noReg, nama);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> getDetail(@PathVariable String id) {
        Optional<Kendaraan> data = kendaraanRepo.findById(id);
        if (data.isPresent()) {
            return ResponseEntity.ok(data.get());
        } else {
            return ResponseEntity.badRequest().body("Data ga ketemu bro");
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveKendaraan(@RequestBody Kendaraan k) {
        try {
          
            if (k.getNoRegistrasi() == null || k.getNoRegistrasi().trim().isEmpty()) {
                return ResponseEntity.badRequest().body("No Registrasi wajib diisi");
            }
            if (k.getNamaPemilik() == null || k.getNamaPemilik().trim().isEmpty()) {
                return ResponseEntity.badRequest().body("Nama Pemilik wajib diisi");
            }

            kendaraanRepo.save(k);
            return ResponseEntity.ok("Sukses simpan data");
        } catch (Exception e) {
            
            return ResponseEntity.badRequest().body("Error simpan: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteKendaraan(@PathVariable String id) {
        try {
            kendaraanRepo.deleteById(id);
            return ResponseEntity.ok("Terhapus");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Gagal hapus: " + e.getMessage());
        }
    }
}