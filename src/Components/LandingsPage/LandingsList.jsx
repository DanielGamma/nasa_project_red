import LandingCard from "./LandingCard"

export default function LandingsList({landing}) { 
    console.log(landing); 
    
    return ( 
        <div className="flex flex-wrap p-6 bg-baghome gap-8">  
            { 
                landing.map((land, i) => { 
                    return <LandingCard title = {land.name} 
                    Mass = {land.mass} 
                    latitude = {land.reclat} 
                    longitude = {land.reclong}   key={i} /> 
                } )
            }
        </div>
    )
    
} 

// className="flex flex-wrap p-6 bg-baghome gap-8"