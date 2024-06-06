package com.fiap.blueFuture.services.ExternalAPI;

import com.fiap.blueFuture.DTO.ClimaDTO;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherMapService {

    @Value("${weatherMap.api.key}")
    private String apiKey;

    public ClimaDTO getWeather(String lat, String lng) {
        String url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + apiKey;
        String json = getJSONFromAPI(url);
        return extractWeather(json);
    }

    private String getJSONFromAPI(String url) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    private ClimaDTO extractWeather(String json) {
        ClimaDTO climaDTO = new ClimaDTO();
        JsonObject jsonObject = JsonParser.parseString(json).getAsJsonObject();
        if (jsonObject.has("main")) {
            JsonObject main = jsonObject.getAsJsonObject("main");
            JsonObject weather = jsonObject.getAsJsonArray("weather").get(0).getAsJsonObject();

            climaDTO.setClima(weather.get("main").getAsString());
            climaDTO.setDescricao(weather.get("description").getAsString());
            climaDTO.setTemperatura(main.get("temp").getAsDouble());
            climaDTO.setPressao(main.get("pressure").getAsInt());
            climaDTO.setUmidade(main.get("humidity").getAsInt());
        }
        return climaDTO;
    }
}
