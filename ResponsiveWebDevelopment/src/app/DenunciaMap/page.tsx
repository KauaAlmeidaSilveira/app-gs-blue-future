'use client'

import MapPage from '@/components/MapPage/MapPage';
import Registros from '@/components/Registros/Registros';
import StateSelect from '@/components/StateSelect/StateSelect';
import React, { useEffect, useState } from 'react';
import style from './DenunciaMap.module.css'


const DenunciaMap = () => {

  const [selectedState, setSelectedState] = useState<string>('');

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };
  
  return (
    <section className={style.box}>
      <div className={style.container}>
        <div className={style.title_reportes}>
          <h1>Reportes</h1>
        </div>
        <div className={style.box_state}>
          <StateSelect onStateChanged={handleStateChange} />
        </div>

        <div className={style.registros}>
          <Registros selectedState={selectedState} />
        </div>


        <div className={style.title_reportes}>
          <h1>Reportes Mapeados</h1>
        </div>
        <MapPage/>
      </div>
    </section>
  );
};

export default DenunciaMap;