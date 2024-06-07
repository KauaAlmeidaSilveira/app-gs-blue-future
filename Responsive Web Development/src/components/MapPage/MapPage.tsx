'use client'

import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import style from './MapPage.module.css'

export interface MapPageProps {}

interface Location {
  lat: number;
  lng: number;
  tipo: string;
}

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA5QPzQ4v_P-OPeZm4qnlYLsMhiAhjQvEI",
  });

  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://localhost:8080/reporte/all');
        const data = await response.json();
        
        const validLocations = data.filter((item: any) =>
          !isNaN(parseFloat(item.endereco.lat)) && !isNaN(parseFloat(item.endereco.lng))
        ).map((item: any) => ({
          lat: parseFloat(item.endereco.lat),
          lng: parseFloat(item.endereco.lng),
          tipo: item.fontePoluicao.tipo,
        }));

        setLocations(validLocations);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchLocations();
  }, []);

  const defaultCenter = { lat: 0, lng: 0 }; 

  return (
    <div className={style.box_map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '80vw', height: '50vh' }}
          center={defaultCenter}
          zoom={2}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.tipo}
              options={{
                label: {
                  text: location.tipo,
                  className: "map-marker"
                }
              }}
            />
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
