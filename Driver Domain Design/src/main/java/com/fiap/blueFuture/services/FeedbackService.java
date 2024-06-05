package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.FeedbackDTO;
import com.fiap.blueFuture.DTO.InstituicaoDTO;
import com.fiap.blueFuture.DTO.ReporteDTO;
import com.fiap.blueFuture.model.Feedback;
import com.fiap.blueFuture.model.Instituicao;
import com.fiap.blueFuture.model.Reporte;
import com.fiap.blueFuture.repositories.FeedbackRepository;
import com.fiap.blueFuture.repositories.InstituicaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private InstituicaoService instituicaoService;

    @Transactional
    public FeedbackDTO insert(FeedbackDTO feedbackDTO, Reporte reporte, InstituicaoDTO instituicaoDTO) {
        Feedback feedback = new Feedback(feedbackDTO);
        feedback.setData(LocalDateTime.now());
        feedback.setReporte(reporte);

        if (instituicaoService.verifyExistence(instituicaoDTO.getEmail())) {
            instituicaoDTO = instituicaoService.findByEmail(instituicaoDTO.getEmail());
        } else {
            instituicaoDTO = instituicaoService.insert(instituicaoDTO);
        }

        feedback.setInstituicao(new Instituicao(instituicaoDTO));
        feedback = feedbackRepository.save(feedback);
        return new FeedbackDTO(feedback);
    }

}
