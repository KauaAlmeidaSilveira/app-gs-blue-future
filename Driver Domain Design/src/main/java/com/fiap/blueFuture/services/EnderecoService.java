package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.EnderecoDTO;
import com.fiap.blueFuture.DTO.GeocodingResponseDTO;
import com.fiap.blueFuture.model.Endereco;
import com.fiap.blueFuture.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    @Autowired
    private GeocodingService geocodingService;

    @Value("${google.api.key}")
    private String apiKey;

    @Transactional(readOnly = true)
    public List<EnderecoDTO> findAll() {
        return enderecoRepository.findAll().stream().map(EnderecoDTO::new).collect(Collectors.toList());
    }

    @Transactional
    public EnderecoDTO insert(EnderecoDTO enderecoDTO) throws ExecutionException, InterruptedException {
        Endereco endereco = new Endereco(enderecoDTO);
        GeocodingResponseDTO geocodingResponseDTO = geocodingService.getCoordinates(endereco.getEndereco());
        endereco.setLat(geocodingResponseDTO.getLat());
        endereco.setLng(geocodingResponseDTO.getLng());
        endereco.setEnderecoFormatado(geocodingResponseDTO.getEnderecoFormatado());
        endereco = enderecoRepository.save(endereco);
        return new EnderecoDTO(endereco);
    }

}
