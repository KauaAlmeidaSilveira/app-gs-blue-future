'use client'
import React, { useEffect, useState } from 'react';
import style from './Registros.module.css';
import Mapa from '../../components/MapPageReporte/MapPageReporte';
import Feedback from '../../components/Feedback/Feedback';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

interface FontePoluicao {
  id: number;
  tipo: string;
  descricao: string;
}

interface Endereco {
  id: number;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
  lat: number;
  lng: number;
}

interface Reporte {
  id: number;
  descricao: string;
  data: string;
  hora: string;
  urgencia: string;
  status: string;
  img_url?: string;
}

interface Instituicao {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

interface FeedbackData {
  id: number;
  data: string;
  status: string;
  descricao: string;
  responsavel: string;
  img_url: string;
  instituicao: Instituicao | null;
}

interface DadoApi {
  usuario: Usuario;
  fontePoluicao: FontePoluicao;
  endereco: Endereco;
  feedback: null | FeedbackData;
  reporte: Reporte;
}

interface RegistrosProps {
  selectedState: string;
}

const Registros = ({ selectedState }: RegistrosProps) => {
  const [dadosEspecificos, setDadosEspecificos] = useState<DadoApi[]>([]);
  const [dadosFiltrados, setDadosFiltrados] = useState<DadoApi[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedLat, setSelectedLat] = useState<number | undefined>(undefined);
  const [selectedLng, setSelectedLng] = useState<number | undefined>(undefined);
  const [showFeedbackForm, setShowFeedbackForm] = useState<number | null>(null);

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
            id: item.usuario.id,
            nome: item.usuario.nome,
            email: item.usuario.email,
            telefone: item.usuario.telefone
          },
          fontePoluicao: {
            id: item.fontePoluicao.id,
            tipo: item.fontePoluicao.tipo,
            descricao: item.fontePoluicao.descricao
          },
          endereco: {
            id: item.endereco.id,
            endereco: item.endereco.endereco,
            bairro: item.endereco.bairro,
            cidade: item.endereco.cidade,
            estado: item.endereco.estado,
            cep: item.endereco.cep,
            pais: item.endereco.pais,
            lat: item.endereco.lat, 
            lng: item.endereco.lng
          },
          feedback: item.feedback || null, 
          reporte: {
            id: item.reporte.id,
            descricao: item.reporte.descricao,
            data: item.reporte.data,
            hora: item.reporte.hora,
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

  const handleOpenMap = (id: number, lat: number, lng: number) => {
    if (selectedId === id) {
      setSelectedId(null);
      setSelectedLat(undefined);
      setSelectedLng(undefined);
    } else {
      setSelectedId(id);
      setSelectedLat(parseFloat(lat.toString()));
      setSelectedLng(parseFloat(lng.toString()));
    }
  };

  const handleOpenFeedback = (id: number) => {
    setShowFeedbackForm(id);
  };

  const handleFeedbackSubmit = async (feedbackData: Omit<FeedbackData, 'id' | 'data'>) => {
    if (showFeedbackForm === null) return;

    try {
      const response = await fetch(`http://localhost:8080/reporte/${showFeedbackForm}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar feedback');
      }

      const updatedFeedback: FeedbackData = await response.json();

      setDadosEspecificos((prevDados) => 
        prevDados.map((item) => 
          item.reporte.id === showFeedbackForm 
            ? { ...item, feedback: updatedFeedback } 
            : item
        )
      );

      alert('Feedback enviado com sucesso!');
      setShowFeedbackForm(null);
      window.location.reload(); // Recarrega a página
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      alert('Erro ao enviar feedback');
    }
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
            Bairro: {item.endereco.bairro}<br />
            Cidade: {item.endereco.cidade}<br />
            Estado: {item.endereco.estado}<br />
            CEP: {item.endereco.cep}<br />
            País: {item.endereco.pais}<br />
            Descrição do Relatório: {item.reporte.descricao}<br />
            Data do Relatório: {item.reporte.data}<br />
            Hora do Relatório: {item.reporte.hora}<br />
            Urgência: {item.reporte.urgencia}<br />
            Status: {item.reporte.status}<br />
            URL da Imagem: {item.reporte.img_url}<br />
            {item.feedback && (
              <div>
                <h4>Feedback</h4>
                Status: {item.feedback.status}<br />
                Descrição: {item.feedback.descricao}<br />
                Responsável: {item.feedback.responsavel}<br />
                URL da Imagem: {item.feedback.img_url}<br />
                {item.feedback.instituicao && (
                  <>
                    <h5>Instituição</h5>
                    Nome: {item.feedback.instituicao.nome}<br />
                    Email: {item.feedback.instituicao.email}<br />
                    Telefone: {item.feedback.instituicao.telefone}<br />
                  </>
                )}
              </div>
            )}
            <button onClick={() => handleOpenMap(item.reporte.id, item.endereco.lat, item.endereco.lng)}>Mapa</button>
            {selectedId === item.reporte.id && selectedLat !== undefined && selectedLng !== undefined && (
              <Mapa lat={selectedLat} lng={selectedLng} />
            )}
            <button onClick={() => handleOpenFeedback(item.reporte.id)}>Feedback</button>
            {showFeedbackForm === item.reporte.id && (
              <Feedback onSubmit={handleFeedbackSubmit} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registros;
