package com.fiap.blueFuture.services;

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

    public List<String[]> getCoordinates(String endereco) {
        String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                URLEncoder.encode(endereco, StandardCharsets.UTF_8) + "&key=" + apiKey;

        // Obter o JSON da API
        String json = getJSONFromAPI(url);

        // Parse o JSON e extraia as coordenadas
        return extractCoordinates(json);
    }

    private String getJSONFromAPI(String url) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

     private List<String[]> extractCoordinates(String json) {
        List<String[]> coordinates = new ArrayList<>();

        // Parse o JSON usando Gson
        JsonObject jsonObject = JsonParser.parseString(json).getAsJsonObject();

        // Verifique se o status é "OK"
        if (jsonObject.has("status") && jsonObject.get("status").getAsString().equals("OK")) {
            JsonArray results = jsonObject.getAsJsonArray("results");

            // Itere sobre os resultados
            for (JsonElement result : results) {
                JsonObject geometry = result.getAsJsonObject().getAsJsonObject("geometry");
                JsonObject location = geometry.getAsJsonObject("location");
                String latString = location.get("lat").getAsString();
                String lngString = location.get("lng").getAsString();
                coordinates.add(new String[]{latString, lngString});
            }
        }

        return coordinates;
    }

}
