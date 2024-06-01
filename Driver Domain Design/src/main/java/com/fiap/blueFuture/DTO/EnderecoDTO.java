package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Endereco;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EnderecoDTO {
    private Long id_endereco;
    private String endereco;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
    private String pais;
    private String lat;
    private String lng;

    public EnderecoDTO(Endereco endereco){
        this.id_endereco = endereco.getId_endereco();
        this.endereco = endereco.getEndereco();
        this.bairro = endereco.getBairro();
        this.cidade = endereco.getCidade();
        this.estado = endereco.getEstado();
        this.cep = endereco.getCep();
        this.pais = endereco.getPais();
        this.lat = endereco.getLat();
        this.lng = endereco.getLng();
    }
}
