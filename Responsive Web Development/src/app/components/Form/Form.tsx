'use client'

import React, { useState } from 'react';
import StateSelect from '../StateSelect/StateSelect';
import CitySelect from '../CitySelect/CitySelect';

const Form = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
  };

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    let enderecoValue = '';
    const enderecoInput = document.getElementById('endereco');
  
    if (enderecoInput instanceof HTMLInputElement) {
      enderecoValue = enderecoInput.value;
    }
  
    const dataToSend = {
      estado: selectedState,
      cidade: selectedCity,
      endereco: enderecoValue,
    };
  
    try {
      const response = await fetch('http://localhost:8080/endereco', {
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
        <label htmlFor="estado">Estado:</label>
        <StateSelect onStateChanged={handleStateChange} />
      </div>
      <div>
        <label htmlFor="cidade">Cidade:</label>
        <CitySelect stateId={selectedState} onCityChanged={handleCityChange} />
      </div>
      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input id='endereco' type="text" />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  );
};

export default Form;
