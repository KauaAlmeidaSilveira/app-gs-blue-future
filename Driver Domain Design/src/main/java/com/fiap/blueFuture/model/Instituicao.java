package com.fiap.blueFuture.model;

import com.fiap.blueFuture.DTO.InstituicaoDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_instituicao")
public class Instituicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String telefone;

    @OneToOne(mappedBy = "instituicao")
    private Feedback feedback;

    public Instituicao(InstituicaoDTO instituicaoDTO) {
        this.id = instituicaoDTO.getId();
        this.nome = instituicaoDTO.getNome();
        this.email = instituicaoDTO.getEmail();
        this.telefone = instituicaoDTO.getTelefone();
    }
}
