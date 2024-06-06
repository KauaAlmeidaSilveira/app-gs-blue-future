import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface RegistroMapProps {
  lat: number;
  lng: number;
}

const MapPageReporte: React.FC<RegistroMapProps> = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA5QPzQ4v_P-OPeZm4qnlYLsMhiAhjQvEI",
  });

  const defaultCenter = { lat, lng }; 
  


  return (
    <div>
      {isLoaded? (
        <GoogleMap
          mapContainerStyle={{ width: '60vw', height: '50vh' }} 
          center={defaultCenter}
          zoom={2}
        >
          <Marker
            position={{ lat, lng }}
            title="Localização do Registro"
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPageReporte;
