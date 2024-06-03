package com.fiap.blueFuture.model;

import com.fiap.blueFuture.DTO.UsuarioDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String telefone;

    @OneToMany(mappedBy = "usuario")
    private List<Reporte> reportes;

    @OneToMany(mappedBy = "usuario")
    private List<Feedback> feedbacks;

    public Usuario(UsuarioDTO usuarioDTO){
        this.nome = usuarioDTO.getNome();
        this.email = usuarioDTO.getEmail();
        this.telefone = usuarioDTO.getTelefone();
    }
}
