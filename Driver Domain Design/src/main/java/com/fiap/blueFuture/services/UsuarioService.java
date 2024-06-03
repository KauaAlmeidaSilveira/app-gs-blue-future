package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.UsuarioDTO;
import com.fiap.blueFuture.model.Usuario;
import com.fiap.blueFuture.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public UsuarioDTO insert(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario(usuarioDTO);
        usuario = usuarioRepository.save(usuario);
        return new UsuarioDTO(usuario);
    }

}
