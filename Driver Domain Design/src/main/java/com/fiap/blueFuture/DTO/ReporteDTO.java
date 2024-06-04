package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Reporte;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReporteDTO {
    private Long id;
    @NotBlank(message = "Descrição é obrigatória")
    private String descricao;
    private LocalDate data;
    private LocalTime hora;
    @NotBlank(message = "Urgência é obrigatória")
    private String urgencia;
    private String status;
    @NotBlank(message = "Imagem é obrigatória")
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
