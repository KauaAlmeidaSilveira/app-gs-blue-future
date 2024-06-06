package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.EnderecoDTO;
import com.fiap.blueFuture.DTO.GeocodingResponseDTO;
import com.fiap.blueFuture.exceptions.ResourceNotFoundException;
import com.fiap.blueFuture.model.Endereco;
import com.fiap.blueFuture.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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

    @Transactional(readOnly = true)
    public EnderecoDTO findById(Long id) {
        return new EnderecoDTO(enderecoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Endereço não encontrado.")));
    }

    @Transactional
    public EnderecoDTO insert(EnderecoDTO enderecoDTO) {
        Endereco endereco = new Endereco(enderecoDTO);
        GeocodingResponseDTO geocodingResponseDTO = geocodingService.getInfoEndereco(endereco.getEndereco(), endereco.getCidade(), endereco.getEstado());
        copyInfoGeocodingToEndereco(geocodingResponseDTO, endereco);
        endereco = enderecoRepository.save(endereco);
        return new EnderecoDTO(endereco);
    }

    private void copyInfoGeocodingToEndereco(GeocodingResponseDTO geocodingResponseDTO, Endereco endereco) {
        endereco.setLat(geocodingResponseDTO.getLat());
        endereco.setLng(geocodingResponseDTO.getLng());
        endereco.setEndereco(geocodingResponseDTO.getEndereco());
        endereco.setBairro(geocodingResponseDTO.getBairro());
        endereco.setCidade(geocodingResponseDTO.getCidade());
        endereco.setEstado(geocodingResponseDTO.getEstado());
        endereco.setCep(geocodingResponseDTO.getCep());
        endereco.setPais(geocodingResponseDTO.getPais());
    }

}
