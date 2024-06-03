package com.fiap.blueFuture.repositories;

import com.fiap.blueFuture.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
