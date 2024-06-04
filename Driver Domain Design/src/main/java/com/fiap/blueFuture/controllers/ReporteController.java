package com.fiap.blueFuture.controllers;

import com.fiap.blueFuture.DTO.RegisterReporteDTO;
import com.fiap.blueFuture.DTO.ReporteDTO;
import com.fiap.blueFuture.DTO.ResponseReporteDTO;
import com.fiap.blueFuture.services.ReporteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reporte")
public class ReporteController {

    @Autowired
    private ReporteService reporteService;

    @PostMapping
    public ResponseEntity<ReporteDTO> insert(@Valid @RequestBody RegisterReporteDTO registerReporteDTO){
        return ResponseEntity.ok(reporteService.insert(registerReporteDTO));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ReporteDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok(reporteService.findById(id));
    }

    @GetMapping(path = "/{id}/all")
    public ResponseEntity<ResponseReporteDTO> findByIdWithDependencies(@PathVariable Long id){
        return ResponseEntity.ok(reporteService.findByIdWithDependencies(id));
    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<ResponseReporteDTO>> findAllWithDependencies(){
        return ResponseEntity.ok(reporteService.findAllWithDependencies());
    }

}
