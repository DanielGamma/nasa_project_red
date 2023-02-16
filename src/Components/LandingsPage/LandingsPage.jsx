import { useEffect, useState } from "react" 
import LandingsList from "./LandingsList"

export default function LandingsPage() {  

    const [landing, setLanding] = useState([]);

    useEffect(() => {  
        fetch("https://nasa-api-us5g.onrender.com/api/landings") 
            .then(res=> res.json()) 
            .then(data => { 
                setLanding(data.landings.filter(fireball => fireball.reclat !== undefined || fireball.reclong !== undefined)) 
            }) 
    }, []) 

    return ( 
            <LandingsList landing = {landing}/>
    )
}