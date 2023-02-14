import { MapContainer, TileLayer } from 'react-leaflet'

export default function MapPage() {

  return (
    <>
      <MapContainer className='w-[80%] h-[500px]' center={[40.6322331, -3.2449314]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
      </MapContainer>
    </>
  )
} 
