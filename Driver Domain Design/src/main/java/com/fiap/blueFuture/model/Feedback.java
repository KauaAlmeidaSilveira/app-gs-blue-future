package com.fiap.blueFuture.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String feedback;

    @ManyToOne
    @JoinColumn(name = "id_reporte")
    private Reporte reporte;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}
