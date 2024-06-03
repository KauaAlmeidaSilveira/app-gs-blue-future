package com.fiap.blueFuture.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReporteDTO {
    private Long id;
    private String descricao;
    private LocalDate data;
    private Instant hora;
    private String urgencia;
    private String status;
    private String img_url;
}
