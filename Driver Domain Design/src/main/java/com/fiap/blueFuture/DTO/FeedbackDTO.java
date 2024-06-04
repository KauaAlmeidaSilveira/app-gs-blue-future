package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Feedback;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FeedbackDTO {
    private Long id;
    private LocalDate data;
    private String statusAtualizado;
    private String descricao;
    private String responsavel;
    private String img_url;

    public FeedbackDTO(Feedback feedback){
        this.id = feedback.getId();
        this.data = feedback.getData();
        this.statusAtualizado = feedback.getStatus();
        this.descricao = feedback.getDescricao();
        this.responsavel = feedback.getResponsavel();
        this.img_url = feedback.getImg_url();
    }
}
