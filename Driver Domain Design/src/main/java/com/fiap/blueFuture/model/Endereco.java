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
    private Long id_endereco;
    private String endereco;
    private String cidade;
    private String lat;
    private String lng;

    public Endereco(EnderecoDTO enderecoDTO){
        this.endereco = enderecoDTO.getEndereco();
        this.cidade = enderecoDTO.getCidade();
        this.lat = enderecoDTO.getLat();
        this.lng = enderecoDTO.getLng();
    }
}
