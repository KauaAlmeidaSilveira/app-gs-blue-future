package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.InstituicaoDTO;
import com.fiap.blueFuture.model.Instituicao;
import com.fiap.blueFuture.repositories.InstituicaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstituicaoService {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    @Transactional
    public InstituicaoDTO insert(InstituicaoDTO instituicaoDTO) {
        Instituicao instituicao = new Instituicao(instituicaoDTO);
        instituicao = instituicaoRepository.save(instituicao);
        return new InstituicaoDTO(instituicao);
    }

    public InstituicaoDTO findByEmail(String email) {
        Instituicao instituicao = instituicaoRepository.findByEmail(email).orElse(new Instituicao());
        return new InstituicaoDTO(instituicao);
    }

    public Boolean verifyExistence(String email) {
        return instituicaoRepository.findByEmail(email).isPresent();
    }

}
