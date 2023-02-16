
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useContext } from "react";
import {LandingContext} from '../../App'

export default function MapPage() {

  const {infoLandings} = useContext(LandingContext)

  return (
    <div className="flex justify-center align-center p-10 bg-baghome h-screen">
      <MapContainer className='w-full h-[600px]' center={[40.6322331, -3.2449314]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {
          infoLandings.map((meteorito,i)=> {
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
