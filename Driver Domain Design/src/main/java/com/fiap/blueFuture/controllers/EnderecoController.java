package com.fiap.blueFuture.controllers;

import com.fiap.blueFuture.DTO.EnderecoDTO;
import com.fiap.blueFuture.services.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<List<EnderecoDTO>> findAll() {
        return ResponseEntity.ok().body(enderecoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok().body(enderecoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<EnderecoDTO> insert(@RequestBody EnderecoDTO enderecoDTO) {
        enderecoDTO = enderecoService.insert(enderecoDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(enderecoDTO.getId_endereco()).toUri();
        return ResponseEntity.created(uri).body(enderecoDTO);
    }
}
