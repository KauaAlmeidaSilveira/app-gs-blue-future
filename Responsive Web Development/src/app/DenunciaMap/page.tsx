'use client'

import MapPage from '@/components/MapPage/MapPage';
import Registros from '@/components/Registros/Registros';
import StateSelect from '@/components/StateSelect/StateSelect';
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