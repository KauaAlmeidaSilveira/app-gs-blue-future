'use client'
import React, { useEffect, useState } from 'react';
import style from './Registros.module.css';
import Mapa from '../../components/MapPageReporte/MapPageReporte'


interface Usuario {
  nome: string;
  email: string;
}

interface FontePoluicao {
  tipo: string;
  descricao: string;
}

interface Endereco {
  endereco: string;
  estado: string;
  cep: string;
  lat: number; 
  lng: number;
}

interface Reporte {
  descricao: string;
  data: string;
  urgencia: string;
  status: string;
  img_url?: string; 
}

interface DadoApi {
  usuario: Usuario;
  fontePoluicao: FontePoluicao;
  endereco: Endereco;
  feedback: null | string; 
  reporte: Reporte;
}

interface RegistrosProps {
  selectedState: string;
}

  const Registros = ({ selectedState }: RegistrosProps) => {
  const [dadosEspecificos, setDadosEspecificos] = useState<DadoApi[]>([]);
  const [dadosFiltrados, setDadosFiltrados] = useState<DadoApi[]>([]);

 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/reporte/all'); 
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
       
        const dadosComInformacoesEspecificas = data.map((item: DadoApi) => ({
          usuario: {
            nome: item.usuario.nome,
            email: item.usuario.email
          },
          fontePoluicao: {
            tipo: item.fontePoluicao.tipo,
            descricao: item.fontePoluicao.descricao
          },
          endereco: {
            endereco: item.endereco.endereco,
            estado: item.endereco.estado,
            cep: item.endereco.cep,
            lat: item.endereco.lat, 
            lng: item.endereco.lng
          },
          feedback: item.feedback || '', 
          reporte: {
            descricao: item.reporte.descricao,
            data: item.reporte.data,
            urgencia: item.reporte.urgencia,
            status: item.reporte.status,
            img_url: item.reporte.img_url || '' 
          }
        }));
        setDadosEspecificos(dadosComInformacoesEspecificas);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const filtrados = dadosEspecificos.filter((item) => item.endereco.estado === selectedState);
      setDadosFiltrados(filtrados);
    } else {
      setDadosFiltrados(dadosEspecificos); 
    }
  }, [selectedState, dadosEspecificos]);

  const [selectedLat, setSelectedLat] = useState<number | undefined>(undefined);
  const [selectedLng, setSelectedLng] = useState<number | undefined>(undefined);

  const handleOpenMap = (lat: number, lng: number) => {
    setSelectedLat(parseFloat(lat.toString()));
    setSelectedLng(parseFloat(lng.toString()));
  };
  

  return (
    <div>
      <h2>Dados Específicos Recebidos</h2>
      <ul>
        {dadosFiltrados.map((item, index) => (
          <li className={style.list} key={index}>
            Nome: {item.usuario.nome}<br />
            Email: {item.usuario.email}<br />
            Tipo de Poluição: {item.fontePoluicao.tipo}<br />
            Descrição da Fonte de Poluição: {item.fontePoluicao.descricao}<br />
            Endereço: {item.endereco.endereco}<br />
            Estado: {item.endereco.estado}<br />
            CEP: {item.endereco.cep}<br />
            Descrição do Relatório: {item.reporte.descricao}<br />
            Data do Relatório: {item.reporte.data}<br />
            Urgência: {item.reporte.urgencia}<br />
            Status: {item.reporte.status}<br />
            URL da Imagem: {item.reporte.img_url} <br/>
            <button onClick={() => handleOpenMap(item.endereco.lat, item.endereco.lng)}>Mapa</button>
            {selectedLat!== undefined && selectedLng!== undefined && (
            <Mapa lat={selectedLat} lng={selectedLng}/>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registros;
