package com.fiap.blueFuture.services;

import com.fiap.blueFuture.DTO.GeocodingResponseDTO;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class GeocodingService {

    @Value("${google.api.key}")
    private String apiKey;

    public GeocodingResponseDTO getCoordinates(String endereco) {
        String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                endereco.replace(" ", "-") + "&key=" + apiKey;

        // Obter o JSON da API
        String json = getJSONFromAPI(url);

        // Parse o JSON e extraia as coordenadas
        return extractCoordinates(json);
    }

    private String getJSONFromAPI(String url) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

     private GeocodingResponseDTO extractCoordinates(String json) {
        GeocodingResponseDTO geocodingResponseDTO = new GeocodingResponseDTO();

        // Parse o JSON usando Gson
        JsonObject jsonObject = JsonParser.parseString(json).getAsJsonObject();

        // Verifique se o status é "OK"
        if (jsonObject.has("status") && jsonObject.get("status").getAsString().equals("OK")) {
            JsonArray results = jsonObject.getAsJsonArray("results");

            // Itere sobre os resultados
            for (JsonElement result : results) {
                JsonObject geometry = result.getAsJsonObject().getAsJsonObject("geometry");
                String formattedAddress = result.getAsJsonObject().get("formatted_address").getAsString();
                JsonObject location = geometry.getAsJsonObject("location");
                geocodingResponseDTO.setLat(location.get("lat").getAsString());
                geocodingResponseDTO.setLng(location.get("lng").getAsString());
                geocodingResponseDTO.setEnderecoFormatado(formattedAddress);
            }
        }

        return geocodingResponseDTO;
    }

}
