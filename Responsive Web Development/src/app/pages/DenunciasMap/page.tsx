'use client'

import MapPage from '@/app/components/MapPage/MapPage';
import Registros from '@/app/components/Registros/Registros';
import StateSelect from '@/app/components/StateSelect/StateSelect';
import React, { useEffect, useState } from 'react';


const DenunciaMap = () => {
  return (
    <div>
      <Registros/>
      <MapPage/>
    </div>
  );
};

export default DenunciaMap;
