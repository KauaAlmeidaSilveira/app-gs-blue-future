package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Endereco;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EnderecoDTO {
    private Long id;
    @NotBlank(message = "Endereço é obrigatório")
    private String endereco;
    private String bairro;
    @NotBlank(message = "Cidade é obrigatória")
    private String cidade;
    @NotBlank(message = "Estado é obrigatório")
    private String estado;
    private String cep;
    private String pais;
    private String lat;
    private String lng;

    public EnderecoDTO(Endereco endereco) {
        this.id = endereco.getId();
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
