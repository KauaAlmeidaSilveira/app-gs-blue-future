'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './StateSelect.module.css'

interface StateOption {
  value: string;
  label: string;
}

const StateSelect = ({ onStateChanged }: { onStateChanged: (state: string) => void }) => {
  const [states, setStates] = useState<StateOption[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const statesData = response.data.map((state: any) => ({
          value: state.sigla, 
          label: state.nome,
        }));
        setStates(statesData);
      } catch (error) {
        console.error('Erro ao buscar estados:', error);
      }
    };

    fetchStates();
  }, []);

  const handleStateChange = (state: string) => {
    onStateChanged(state); 
  };

  return (
    <select className={style.opcoes_estado} onChange={(e) => handleStateChange(e.target.value)}>
      <option value="">Selecione um estado</option>
      {states.map((state) => (
        <option key={state.value} value={state.value}>
          {state.label}
        </option>
      ))}
    </select>
  );
};

export default StateSelect;
