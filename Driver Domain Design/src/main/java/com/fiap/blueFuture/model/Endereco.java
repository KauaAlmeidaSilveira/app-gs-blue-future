package com.fiap.blueFuture.model;

import com.fiap.blueFuture.DTO.EnderecoDTO;
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
@Table(name = "tb_endereco")
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String endereco;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
    private String pais;
    private String lat;
    private String lng;

    @OneToOne(mappedBy = "endereco")
    private Reporte reporte;

    public Endereco(EnderecoDTO enderecoDTO) {
        this.endereco = enderecoDTO.getEndereco();
        this.bairro = enderecoDTO.getBairro();
        this.cidade = enderecoDTO.getCidade();
        this.estado = enderecoDTO.getEstado();
        this.cep = enderecoDTO.getCep();
        this.pais = enderecoDTO.getPais();
        this.lat = enderecoDTO.getLat();
        this.lng = enderecoDTO.getLng();
    }
}
