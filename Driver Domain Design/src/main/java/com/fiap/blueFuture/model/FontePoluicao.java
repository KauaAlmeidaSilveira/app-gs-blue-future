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
@Table(name = "tb_fonte_poluicao")
public class FontePoluicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tipo; // ex: industrial, veicular, residencial
    private String descricao; // ex : fabrica de papel, carro, residencia

    @OneToOne(mappedBy = "fontePoluicao")
    private Reporte reporte;
}
