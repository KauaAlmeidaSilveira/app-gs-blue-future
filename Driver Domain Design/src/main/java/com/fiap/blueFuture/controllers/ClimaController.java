package com.fiap.blueFuture.controllers;

import com.fiap.blueFuture.DTO.ClimaDTO;
import com.fiap.blueFuture.DTO.ResponseReporteDTO;
import com.fiap.blueFuture.services.ReporteService;
import com.fiap.blueFuture.services.WeatherMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clima")
public class ClimaController {

    @Autowired
    private WeatherMapService weatherMapService;

    @Autowired
    private ReporteService reporteService;

    @GetMapping(path = "/reporte/{id}")
    public ResponseEntity<ClimaDTO> getWeather(@PathVariable Long id) {
        ResponseReporteDTO reporteDTO = reporteService.findByIdWithDependencies(id);
        return ResponseEntity.ok(weatherMapService.getWeather(reporteDTO.getEndereco().getLat(), reporteDTO.getEndereco().getLng()));
    }

}
