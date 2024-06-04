'use client'

import MapPage from '@/app/components/MapPage/MapPage';
import Registros from '@/app/components/Registros/Registros';
import StateSelect from '@/app/components/StateSelect/StateSelect';
import React, { useEffect, useState } from 'react';


const DenunciaMap = () => {

  const [selectedState, setSelectedState] = useState<string>('');

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };
  
  return (
    <div>
      <StateSelect onStateChanged={handleStateChange} />
      <Registros selectedState={selectedState} />
      <MapPage/>
    </div>
  );
};

export default DenunciaMap;