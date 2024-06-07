package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.FeedbackDTO;
import com.fiap.blueFuture.DTO.InstituicaoDTO;
import com.fiap.blueFuture.exceptions.ResourceNotFoundException;
import com.fiap.blueFuture.model.Feedback;
import com.fiap.blueFuture.model.Instituicao;
import com.fiap.blueFuture.model.Reporte;
import com.fiap.blueFuture.repositories.FeedbackRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

        Instituicao instituicao = new Instituicao(instituicaoDTO);

        feedback.setInstituicao(instituicao);
        feedback = feedbackRepository.save(feedback);
        return new FeedbackDTO(feedback);
    }

    @Transactional
    public void delete(Long id) {
        feedbackRepository.deleteById(id);
    }

    @Transactional
    public FeedbackDTO update(FeedbackDTO feedbackDTO, Long id) {
        Feedback feedback = feedbackRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Feedback não encontrado"));
        feedback.setData(LocalDateTime.now());
        feedback.setStatus(feedbackDTO.getStatus());
        feedback.setDescricao(feedbackDTO.getDescricao());
        feedback.setResponsavel(feedbackDTO.getResponsavel());
        feedback.setImg_url(feedbackDTO.getImg_url());
        feedback = feedbackRepository.save(feedback);
        return new FeedbackDTO(feedback);
    }

}
