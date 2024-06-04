'use client'

import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export interface MapPageProps {}

interface Location {
  lat: number;
  lng: number;
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
        const response = await fetch('http://localhost:8080/endereco');
        const data = await response.json();
        
        // Verificação para garantir que lat e lng sejam números válidos
        const validLocations = data.filter((location: any) =>
          !isNaN(location.lat) && !isNaN(location.lng)
        ).map((location: any) => ({
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lng)
        }));

        setLocations(validLocations);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchLocations();
  }, []);

  const defaultCenter = { lat: 0, lng: 0 }; // Altere para uma localização central padrão, se necessário

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '60vw', height: '50vh' }}
          center={defaultCenter}
          zoom={1}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              title="Área poluida"
              options={{
                label: {
                  text: "Área contaminada",
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
