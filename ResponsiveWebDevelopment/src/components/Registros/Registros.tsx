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
    setShowFeedbackForm((prevId) => (prevId === id ? null : id));
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
      window.location.reload(); 
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      alert('Erro ao enviar feedback');
    }
  };

  return (
    <div>
      <ul className={style.listUl}>
        {dadosFiltrados.map((item, index) => (
          <li className={style.listLi} key={index}>
            <div className={style.container_reporte}>
              <div className={style.box_info_reporte}>

              <div className={style.title_reporte}>
                  <h1>Dados do reporte</h1>
              </div>

                <p className={style.dados_reporte}><span className={style.span_dados}>Nome: </span>{item.usuario.nome}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Email: </span>{item.usuario.email}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Tipo de Poluição: </span>{item.fontePoluicao.tipo}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Descrição da Fonte de Poluição: </span>{item.fontePoluicao.descricao}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Endereço: </span>{item.endereco.endereco}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Descrição do Relatório: </span>{item.reporte.descricao}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Data do Relatório: </span>{item.reporte.data}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Nível urgência: </span>{item.reporte.urgencia}</p>
                <p className={style.dados_reporte}><span className={style.span_dados}>Status: </span>{item.reporte.status}</p>
              </div>
            </div>
            
            {item.feedback && (
              <div>
                <div className={style.container_reporte}>
                    <div className={style.box_info_reporte}>

                        <div className={style.title_reporte}>
                            <h1>Feedback</h1>
                        </div>

                        <p className={style.dados_reporte}><span className={style.span_dados}>Status: </span> {item.feedback.status}</p>
                        <p className={style.dados_reporte}><span className={style.span_dados}>Descrição: </span>{item.feedback.descricao}</p>
                        <p className={style.dados_reporte}><span className={style.span_dados}>Responsável: </span>{item.feedback.responsavel}</p>
                        {item.feedback.instituicao && (
                        <div className={style.box_info_reporte}>
                            <div className={style.title_reporte_space}>
                                <h1>Organização</h1>
                            </div>
                            <p className={style.dados_reporte}><span className={style.span_dados}>Nome: </span>{item.feedback.instituicao.nome}</p>
                            <p className={style.dados_reporte}><span className={style.span_dados}>Email: </span>{item.feedback.instituicao.email}</p>
                            <p className={style.dados_reporte}><span className={style.span_dados}>Telefone: </span>{item.feedback.instituicao.telefone}</p>
                        </div>
                      )}
                    </div>
              </div>
              </div>
              )}
              <div className={style.buttons_box}>
                  <button className={style.button_reporte} onClick={() => handleOpenMap(item.reporte.id, item.endereco.lat, item.endereco.lng)}>Mapa</button>
                {selectedId === item.reporte.id && selectedLat !== undefined && selectedLng !== undefined && (
                  <Mapa lat={selectedLat} lng={selectedLng} />
                )}
                <button className={style.button_reporte} onClick={() => handleOpenFeedback(item.reporte.id)}>Feedback</button>
                {showFeedbackForm === item.reporte.id && (
                  <Feedback onSubmit={handleFeedbackSubmit} />
                )}
              </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registros;
