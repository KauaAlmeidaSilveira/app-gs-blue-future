package com.fiap.blueFuture.services;

import com.fiap.blueFuture.repositories.FontePoluicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FontePoluicaoService {

    @Autowired
    private FontePoluicaoRepository fontePoluicaoRepository;

}
