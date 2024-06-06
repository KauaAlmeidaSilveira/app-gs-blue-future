'use client'
import React, { useState } from 'react';
import StateSelect from '../StateSelect/StateSelect';
import CitySelect from '../CitySelect/CitySelect';
import style from './Form.module.css'


const Form = () => {
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

  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
  };

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

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
    <form className={style.formulario}>

      <div className={style.org}>
        <label className={style.label} htmlFor="nome">Nome:
        <input className={style.insert_dados} id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
      
        <label className={style.label} htmlFor="email">Email:
        <input className={style.insert_dados} id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <div className={style.org}>
        <label className={style.label} htmlFor="telefone">Telefone:
        <input className={style.insert_dados} id="telefone" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>

        <label className={style.label} htmlFor="tipoFontePoluicao">Tipo de Fonte de Poluição:
        <input className={style.insert_dados} id="tipoFontePoluicao" type="text" value={tipoFontePoluicao} onChange={(e) => setTipoFontePoluicao(e.target.value)} />
        </label>
      </div>

      <div className={style.org}>
        <label className={style.label} htmlFor="descricaoFontePoluicao">Descrição da Fonte de Poluição:
        <textarea className={style.areaText} id="descricaoFontePoluicao" value={descricaoFontePoluicao} onChange={(e) => setDescricaoFontePoluicao(e.target.value)} />
        </label>
        
        <label className={style.label} htmlFor="descricaoReporte">Descrição do Reporte:
        <textarea className={style.areaText} id="descricaoReporte" value={descricaoReporte} onChange={(e) => setDescricaoReporte(e.target.value)} />
        </label>
      </div>

      <div className={style.org}>
        <label className={style.label} htmlFor="estado">Estado:
        <StateSelect onStateChanged={handleStateChange} />
        </label>
      
        <label className={style.label} htmlFor="cidade">Cidade:
        <CitySelect stateId={selectedState} onCityChanged={handleCityChange} />
        </label>
      </div>

      <div className={style.org}>
        <label className={style.label} htmlFor="endereco">Endereço:
        <input className={style.insert_dados} id="endereco" type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </label>
      
        <label className={style.label} htmlFor="urgenciaReporte">Urgência do Reporte:
        <input className={style.insert_dados} id="urgenciaReporte" type="number" min={1} max={5} value={urgenciaReporte} onChange={(e) => setUrgenciaReporte(e.target.value)} />
        </label>
      </div>
      <div>

        <label className={style.label} htmlFor="imgUrl">URL da Imagem:</label>
        <input className={style.insert_dados} id="imgUrl" type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      </div>
      <div>
        <button className={style.button} type="button" onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  );
};

export default Form;
