package com.fiap.blueFuture.repositories;

import com.fiap.blueFuture.model.Instituicao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InstituicaoRepository extends JpaRepository<Instituicao, Long> {
    Optional<Instituicao> findByEmail(String email);
}
