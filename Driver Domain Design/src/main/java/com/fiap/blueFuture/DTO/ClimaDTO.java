package com.fiap.blueFuture.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ClimaDTO {
    private String clima;
    private String descricao;
    private double temperatura;
    private int pressao;
    private int umidade;
}
