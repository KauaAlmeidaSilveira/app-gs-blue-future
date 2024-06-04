package com.fiap.blueFuture.model;

import com.fiap.blueFuture.DTO.FeedbackDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate data;
    private String status;
    private String descricao;
    private String responsavel;
    private String img_url;

    @OneToOne(mappedBy = "feedback")
    private Reporte reporte;

    @ManyToOne
    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicao;

    public Feedback(FeedbackDTO feedbackDTO){
        this.data = feedbackDTO.getData();
        this.status = feedbackDTO.getStatusAtualizado();
        this.descricao = feedbackDTO.getDescricao();
        this.responsavel = feedbackDTO.getResponsavel();
        this.img_url = feedbackDTO.getImg_url();
    }
}
