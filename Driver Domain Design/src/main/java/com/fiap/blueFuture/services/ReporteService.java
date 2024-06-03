package com.fiap.blueFuture.services;

import com.fiap.blueFuture.repositories.ReporteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReporteService {

    @Autowired
    private ReporteRepository reporteRepository;

}
