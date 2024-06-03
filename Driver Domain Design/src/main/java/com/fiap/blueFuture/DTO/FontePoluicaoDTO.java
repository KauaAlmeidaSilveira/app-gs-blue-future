package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.FontePoluicao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FontePoluicaoDTO {
    private Long id;
    private String tipo;
    private String descricao;

    public FontePoluicaoDTO(FontePoluicao fontePoluicao) {
        this.id = fontePoluicao.getId();
        this.tipo = fontePoluicao.getTipo();
        this.descricao = fontePoluicao.getDescricao();
    }
}
