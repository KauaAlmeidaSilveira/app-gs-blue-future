package com.fiap.blueFuture.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegisterReporteDTO {
    private UsuarioDTO usuario;
    private FontePoluicaoDTO fontePoluicao;
    private EnderecoDTO endereco;
    private ReporteDTO reporte;
}
