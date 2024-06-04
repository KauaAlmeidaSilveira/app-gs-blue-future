package com.fiap.blueFuture.DTO;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegisterReporteDTO {
    @Valid
    private UsuarioDTO usuario;
    @Valid
    private FontePoluicaoDTO fontePoluicao;
    @Valid
    private EnderecoDTO endereco;
    @Valid
    private ReporteDTO reporte;
}
