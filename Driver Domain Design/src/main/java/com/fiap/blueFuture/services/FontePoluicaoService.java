package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.FontePoluicaoDTO;
import com.fiap.blueFuture.model.FontePoluicao;
import com.fiap.blueFuture.repositories.FontePoluicaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FontePoluicaoService {

    @Autowired
    private FontePoluicaoRepository fontePoluicaoRepository;

    @Transactional
    public FontePoluicaoDTO insert(FontePoluicaoDTO fontePoluicaoDTO) {
        FontePoluicao fontePoluicao = new FontePoluicao(fontePoluicaoDTO);
        fontePoluicao = fontePoluicaoRepository.save(fontePoluicao);
        return new FontePoluicaoDTO(fontePoluicao);
    }

}
