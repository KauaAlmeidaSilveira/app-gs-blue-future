package com.fiap.blueFuture.DTO;

import com.fiap.blueFuture.model.Instituicao;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class InstituicaoDTO {
    private Long id;
    @NotBlank(message = "Nome é obrigatório")
    private String nome;
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;
    @NotBlank(message = "Telefone é obrigatório")
    private String telefone;

    public InstituicaoDTO(Instituicao instituicao) {
        this.id = instituicao.getId();
        this.nome = instituicao.getNome();
        this.email = instituicao.getEmail();
        this.telefone = instituicao.getTelefone();
    }
}
