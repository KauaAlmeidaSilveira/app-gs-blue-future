'use client'

import MapPage from '@/app/components/MapPage/MapPage';
import React, { useEffect, useState } from 'react';

// Definição da interface para os dados recebidos
interface DadoApi {
  endereco: string;
  lat: number;
  lng: number;
}

const DadosComponent = () => {
  const [dadosEspecificos, setDadosEspecificos] = useState<DadoApi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/endereco'); 
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        const dadosComInformacoesEspecificas = data.map((dado: DadoApi) => ({
          endereco: dado.endereco,
          lat: dado.lat,
          lng: dado.lng
        }));
        setDadosEspecificos(dadosComInformacoesEspecificas);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Dados Específicos Recebidos</h2>
      <ul>
        {dadosEspecificos.map((item, index) => (
          <li key={index}>
            Endereço: {item.endereco}<br />
          </li>
        ))}
      </ul>
      <MapPage/>
    </div>
  );
};

export default DadosComponent;
