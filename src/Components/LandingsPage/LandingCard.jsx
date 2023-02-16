import Modify from "../../Assets/icons8-modify-58.png"
import Delete from "../../Assets/icons8-basura-24.png" 
import Favourite from "../../Assets/icons8-me-gusta-24.png" 


export default function LandingCard({title, mass, latitude, longitude}) { 

    return ( 
        <div className="flex gap-4 w-48 h-44 flex-col justify-center content-center bg-navColor text-white rounded-md"> 
            <h1 className="text-center">{title}</h1> 
            <div className="bg-rosado w-14 h-0.5 ml-4 "></div>
            <div className="pl-6"> 
                <p>Mass: {mass}</p> 
                <p>Lat: {latitude}</p> 
                <p>Long: {longitude}</p> 
            </div> 

            <div className="flex w-4 gap-3 "> 
                <img src={Modify} alt='modify'/>
                <img src={Delete} alt='delete'/> 
                <img src={Favourite} alt='favourite'/>
            </div>
        </div>
    )
    
}