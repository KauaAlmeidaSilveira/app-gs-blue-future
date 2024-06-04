package com.fiap.blueFuture.DTO;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterFeedbackDTO {
    @Valid
    private FeedbackDTO feedback;
    @Valid
    private InstituicaoDTO instituicao;
}
