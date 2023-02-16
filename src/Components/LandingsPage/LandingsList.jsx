import LandingCard from "./LandingCard"

export default function LandingsList({landings}) { 

    return ( 
        <div className="flex flex-wrap justify-center p-6 bg-baghome gap-8">  
            { 
                landings.map((landing, i) => { 
                    return <LandingCard title = {landing.name} 
                    Mass = {landing.mass} 
                    latitude = {landing.reclat} 
                    longitude = {landing.reclong}   key={i} /> 
                } )
            }
        </div>
    )
    
} 

