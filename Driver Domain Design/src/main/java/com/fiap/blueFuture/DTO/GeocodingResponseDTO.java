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

    private String lat;
    private String lng;
    private String enderecoFormatado;

}
