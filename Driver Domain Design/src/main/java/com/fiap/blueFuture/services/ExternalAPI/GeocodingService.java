package com.fiap.blueFuture.services.ExternalAPI;

import com.fiap.blueFuture.DTO.GeocodingResponseDTO;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeocodingService {

    @Value("${google.api.key}")
    private String apiKey;

    public GeocodingResponseDTO getInfoEndereco(String endereco, String cidade, String estado) {
        String address = endereco + "-" + cidade + "-" + estado;
        String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                address.replace(" ", "-") + "&key=" + apiKey;

        // Obter o JSON da API
        String json = getJSONFromAPI(url);

        // Parse o JSON e extraia as coordenadas
        return extractInfosEndereco(json);
    }

    private String getJSONFromAPI(String url) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    private GeocodingResponseDTO extractInfosEndereco(String json) {
        GeocodingResponseDTO geocodingResponseDTO = new GeocodingResponseDTO();

        // Parse o JSON usando Gson
        JsonObject jsonObject = JsonParser.parseString(json).getAsJsonObject();

        // Verifique se o status é "OK"
        if (jsonObject.has("status") && jsonObject.get("status").getAsString().equals("OK")) {
            JsonArray results = jsonObject.getAsJsonArray("results");

            // Itere sobre os resultados
            for (JsonElement result : results) {
                String formattedAddress = result.getAsJsonObject().get("formatted_address").getAsString();
                JsonObject bairro = result.getAsJsonObject().getAsJsonArray("address_components").get(2).getAsJsonObject();
                JsonObject cidade = result.getAsJsonObject().getAsJsonArray("address_components").get(3).getAsJsonObject();
                JsonObject estado = result.getAsJsonObject().getAsJsonArray("address_components").get(4).getAsJsonObject();
                JsonObject pais = result.getAsJsonObject().getAsJsonArray("address_components").get(5).getAsJsonObject();
                JsonObject cep = result.getAsJsonObject().getAsJsonArray("address_components").get(6).getAsJsonObject();
                JsonObject geometry = result.getAsJsonObject().getAsJsonObject("geometry");
                JsonObject location = geometry.getAsJsonObject("location");


                geocodingResponseDTO.setEndereco(formattedAddress);
                geocodingResponseDTO.setBairro(bairro.getAsJsonObject().get("long_name").getAsString());
                geocodingResponseDTO.setCidade(cidade.getAsJsonObject().get("long_name").getAsString());
                geocodingResponseDTO.setEstado(estado.getAsJsonObject().get("short_name").getAsString());
                geocodingResponseDTO.setPais(pais.getAsJsonObject().get("long_name").getAsString());
                geocodingResponseDTO.setCep(cep.getAsJsonObject().get("long_name").getAsString());

                geocodingResponseDTO.setLat(location.get("lat").getAsString());
                geocodingResponseDTO.setLng(location.get("lng").getAsString());
            }
        }

        return geocodingResponseDTO;
    }

}
