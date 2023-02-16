import { useContext } from "react" 
import {LandingContext} from '../../App'
import LandingsList from "./LandingsList"

export default function LandingsPage() {  

    const {infoLandings} = useContext(LandingContext)
    
    return ( 
        <LandingsList landings = {infoLandings}/>
    )
}