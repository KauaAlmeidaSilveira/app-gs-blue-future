package com.fiap.blueFuture.model;

import com.fiap.blueFuture.DTO.ReporteDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_reporte")
public class Reporte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;
    private LocalDate data;
    private LocalTime hora;
    private String urgencia;
    private String status;
    private String img_url;

    @OneToOne
    private Endereco endereco;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @OneToOne
    private FontePoluicao fontePoluicao;

    @OneToOne(mappedBy = "reporte")
    private Feedback feedback;

    public Reporte(ReporteDTO reporteDTO) {
        this.descricao = reporteDTO.getDescricao();
        this.data = reporteDTO.getData();
        this.hora = reporteDTO.getHora();
        this.urgencia = reporteDTO.getUrgencia();
        this.status = reporteDTO.getStatus();
        this.img_url = reporteDTO.getImg_url();
    }
}
