'use client'
import React, { useState } from 'react';
import StateSelect from '../StateSelect/StateSelect';
import CitySelect from '../CitySelect/CitySelect';

// Componente Form
const Form = () => {
  // Estados para controlar os valores selecionados
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoFontePoluicao, setTipoFontePoluicao] = useState('');
  const [descricaoFontePoluicao, setDescricaoFontePoluicao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricaoReporte, setDescricaoReporte] = useState('');
  const [urgenciaReporte, setUrgenciaReporte] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  // Funções para atualizar os estados quando houver mudanças nos campos
  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
  };

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Construção do objeto de dados a ser enviado
    const dataToSend = {
      usuario: {
        nome,
        email,
        telefone,
      },
      fontePoluicao: {
        tipo: tipoFontePoluicao,
        descricao: descricaoFontePoluicao,
      },
      endereco: {
        endereco,
        cidade: selectedCity,
        estado: selectedState,
      },
      reporte: {
        descricao: descricaoReporte,
        urgencia: urgenciaReporte,
        img_url: imgUrl,
      },
    };

    try {
      const response = await fetch('http://localhost:8080/reporte', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input id="telefone" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </div>
      <div>
        <label htmlFor="tipoFontePoluicao">Tipo de Fonte de Poluição:</label>
        <input id="tipoFontePoluicao" type="text" value={tipoFontePoluicao} onChange={(e) => setTipoFontePoluicao(e.target.value)} />
      </div>
      <div>
        <label htmlFor="descricaoFontePoluicao">Descrição da Fonte de Poluição:</label>
        <textarea id="descricaoFontePoluicao" value={descricaoFontePoluicao} onChange={(e) => setDescricaoFontePoluicao(e.target.value)} />
      </div>
      <div>
        <label htmlFor="estado">Estado:</label>
        <StateSelect onStateChanged={handleStateChange} />
      </div>
      <div>
        <label htmlFor="cidade">Cidade:</label>
        <CitySelect stateId={selectedState} onCityChanged={handleCityChange} />
      </div>
      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input id="endereco" type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
      </div>
      <div>
        <label htmlFor="descricaoReporte">Descrição do Reporte:</label>
        <textarea id="descricaoReporte" value={descricaoReporte} onChange={(e) => setDescricaoReporte(e.target.value)} />
      </div>
      <div>
        <label htmlFor="urgenciaReporte">Urgência do Reporte:</label>
        <input id="urgenciaReporte" type="text" value={urgenciaReporte} onChange={(e) => setUrgenciaReporte(e.target.value)} />
      </div>
      <div>
        <label htmlFor="imgUrl">URL da Imagem:</label>
        <input id="imgUrl" type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  );
};

export default Form;
