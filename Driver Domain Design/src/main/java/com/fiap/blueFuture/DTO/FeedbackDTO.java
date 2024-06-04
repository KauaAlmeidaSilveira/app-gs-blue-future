package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Feedback;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FeedbackDTO {
    private Long id;
    private String feedback;

    public FeedbackDTO(Feedback feedback){
        this.id = feedback.getId();
        this.feedback = feedback.getFeedback();
    }
}
