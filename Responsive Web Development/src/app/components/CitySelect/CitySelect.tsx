'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CityOption {
  value: string;
  label: string;
}

const CitySelect = ({ stateId, onCityChanged }: { stateId: string; onCityChanged: (city: string) => void }) => {
  const [cities, setCities] = useState<CityOption[]>([]);

  useEffect(() => {
    if (!stateId) return;

    const fetchCities = async () => {
      try {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
        const citiesData = response.data.map((city: any) => ({
          value: city.id,
          label: city.nome,
        }));
        setCities(citiesData);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    fetchCities();
  }, [stateId]);

  return (
    <select onChange={(e) => onCityChanged(e.target.value)}>
      <option value="">Selecione uma cidade</option>
      {cities.map((city) => (
        <option key={city.value} value={city.value}>
          {city.label}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
