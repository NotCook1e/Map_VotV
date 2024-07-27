// src/MapComponent.js
import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 2,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;
