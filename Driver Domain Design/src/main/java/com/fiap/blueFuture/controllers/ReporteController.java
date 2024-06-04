package com.fiap.blueFuture.controllers;

import com.fiap.blueFuture.DTO.RegisterReporteDTO;
import com.fiap.blueFuture.DTO.ReporteDTO;
import com.fiap.blueFuture.services.ReporteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reporte")
public class ReporteController {

    @Autowired
    private ReporteService reporteService;

    @PostMapping
    public ResponseEntity<ReporteDTO> insert(@Valid @RequestBody RegisterReporteDTO registerReporteDTO){
        return ResponseEntity.ok(reporteService.insert(registerReporteDTO));
    }

}
