package com.fiap.blueFuture.controllers;

import com.fiap.blueFuture.DTO.EnderecoDTO;
import com.fiap.blueFuture.services.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public List<EnderecoDTO> findAll(){
        return enderecoService.findAll();
    }

    @PostMapping
    public EnderecoDTO insert(@RequestBody EnderecoDTO enderecoDTO) throws ExecutionException, InterruptedException {
        return enderecoService.insert(enderecoDTO);
    }
}
