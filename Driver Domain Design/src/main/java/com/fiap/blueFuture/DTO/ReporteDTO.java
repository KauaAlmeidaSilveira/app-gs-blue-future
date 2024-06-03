package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Reporte;
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

    public ReporteDTO(Reporte reporte){
        this.id = reporte.getId();
        this.descricao = reporte.getDescricao();
        this.data = reporte.getData();
        this.hora = reporte.getHora();
        this.urgencia = reporte.getUrgencia();
        this.status = reporte.getStatus();
        this.img_url = reporte.getImg_url();
    }
}
