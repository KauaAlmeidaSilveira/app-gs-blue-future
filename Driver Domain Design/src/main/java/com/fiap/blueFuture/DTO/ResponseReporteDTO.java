package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Reporte;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseReporteDTO {
    @Valid
    private UsuarioDTO usuario;
    @Valid
    private FontePoluicaoDTO fontePoluicao;
    @Valid
    private EnderecoDTO endereco;
    @Valid
    private FeedbackDTO feedback;
    @Valid
    private ReporteDTO reporte;

    public ResponseReporteDTO(Reporte reporte) {
        this.usuario = new UsuarioDTO(reporte.getUsuario());
        this.fontePoluicao = new FontePoluicaoDTO(reporte.getFontePoluicao());
        this.endereco = new EnderecoDTO(reporte.getEndereco());
        this.feedback = reporte.getMostRecentFeedback() == null ? null : new FeedbackDTO(reporte.getMostRecentFeedback());
        this.reporte = new ReporteDTO(reporte);
    }


}
