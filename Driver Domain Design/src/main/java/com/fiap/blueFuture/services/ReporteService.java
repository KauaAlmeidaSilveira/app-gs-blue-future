package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.*;
import com.fiap.blueFuture.exceptions.ResourceNotFoundException;
import com.fiap.blueFuture.model.*;
import com.fiap.blueFuture.repositories.ReporteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ReporteService {

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    @Autowired
    private ReporteRepository reporteRepository;
    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private FontePoluicaoService fontePoluicaoService;
    @Autowired
    private EnderecoService enderecoService;
    @Autowired
    private FeedbackService feedbackService;

    @Transactional
    public ReporteDTO insert(RegisterReporteDTO reporteDTO) {
        Reporte reporte = new Reporte(reporteDTO.getReporte());
        reporte.setData(LocalDate.now());
        reporte.setHora(LocalTime.parse(LocalTime.now().format(formatter)));
        reporte.setStatus("Pendente");
        insertAllDependenciesToReport(reporteDTO, reporte);
        reporte = reporteRepository.save(reporte);
        return new ReporteDTO(reporte);
    }

    public ReporteDTO findById(Long id) {
        Reporte reporte = reporteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reporte não encontrado"));
        return new ReporteDTO(reporte);
    }

    public ResponseReporteDTO findByIdWithDependencies(Long id) {
        Reporte reporte = reporteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reporte não encontrado"));
        return new ResponseReporteDTO(reporte);
    }

    public List<ResponseReporteDTO> findAllWithDependencies() {
        return reporteRepository.findAll().stream().map(ResponseReporteDTO::new).toList();
    }

    @Transactional
    public ResponseReporteDTO addFeedback(FeedbackDTO feedbackDTO, Long id, InstituicaoDTO instituicaoDTO) {
        Reporte reporte = reporteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reporte não encontrado"));
        if (reporte.getFeedback() != null) {
            feedbackService.update(feedbackDTO, reporte.getFeedback().getId());
        }else {
            feedbackDTO = feedbackService.insert(feedbackDTO, reporte, instituicaoDTO);
            reporte.setFeedback(new Feedback(feedbackDTO));
            reporte.setStatus(feedbackDTO.getStatus());
        }

        reporte = reporteRepository.save(reporte);
        return new ResponseReporteDTO(reporte);
    }

    @Transactional
    private void insertAllDependenciesToReport(RegisterReporteDTO reporteDTO, Reporte reporte) {
        UsuarioDTO usuario = usuarioService.insert(reporteDTO.getUsuario());
        FontePoluicaoDTO fontePoluicao = fontePoluicaoService.insert(reporteDTO.getFontePoluicao());
        EnderecoDTO endereco = enderecoService.insert(reporteDTO.getEndereco());

        reporte.setUsuario(new Usuario(usuario));
        reporte.setFontePoluicao(new FontePoluicao(fontePoluicao));
        reporte.setEndereco(new Endereco(endereco));
    }

    @Transactional
    public ReporteDTO update(ReporteDTO reporteDTO, Long id) {
        Reporte reporte = reporteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reporte não encontrado"));
        updateData(reporteDTO, reporte);
        reporte = reporteRepository.save(reporte);
        return new ReporteDTO(reporte);
    }

    @Transactional
    public void delete(Long id) {
        Reporte reporte = reporteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Reporte não encontrado"));
        feedbackService.delete(reporte.getFeedback().getId());
        reporteRepository.delete(reporte);
    }


    private void updateData(ReporteDTO reporteDTO, Reporte reporte) {
        if (reporteDTO.getDescricao() != null) {
            reporte.setDescricao(reporteDTO.getDescricao());
        }
        if (reporteDTO.getUrgencia() != null) {
            reporte.setUrgencia(reporteDTO.getUrgencia());
        }
        if (reporteDTO.getImg_url() != null) {
            reporte.setImg_url(reporteDTO.getImg_url());
        }
    }
}
