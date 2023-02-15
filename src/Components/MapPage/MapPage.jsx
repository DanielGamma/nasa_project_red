import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from "react";

export default function MapPage() {

  const [meteoritos, setMeteoritos] = useState([]);

  useEffect(() => {
    fetch("https://nasa-api-us5g.onrender.com/api/landings")
      .then(res => res.json())
      .then(data => {
        setMeteoritos(data.landings.filter(fireball => fireball.reclat !== undefined || fireball.reclong !== undefined))
      })
      
    }, []);

  return (
    <div className="flex justify-center align-center p-10 bg-baghome h-screen">
      <MapContainer className='w-full h-[600px]' center={[40.6322331, -3.2449314]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {
          meteoritos.map((meteorito,i)=> {
            return (
            <Marker position={[meteorito.reclat, meteorito.reclong]} key={i}>
              <Popup>
                {meteorito.name}
              </Popup>
            </Marker>
            )
          })
        } 
      </MapContainer>
    </div>
  )
} 
