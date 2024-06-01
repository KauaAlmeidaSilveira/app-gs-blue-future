package com.fiap.blueFuture.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GeocodingResponseDTO {
    private String endereco;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
    private String pais;
    private String lat;
    private String lng;
}
