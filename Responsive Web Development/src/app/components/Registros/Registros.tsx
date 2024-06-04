'use client'

import React, { useEffect, useState } from 'react';
import style from './Registros.module.css';

interface DadoApi {
  endereco: string;
  lat: number;
  lng: number;
}

const Registros = () => {
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
          <li className={style.list} key={index}>
            Endereço: {item.endereco}<br />
            Latitude: {item.lat}<br />
            Longitude: {item.lng}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Registros;
