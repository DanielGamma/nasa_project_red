import Modify from "../../Assets/icons8-modify-58.png"
import Delete from "../../Assets/icons8-basura-24.png" 
import Favourite from "../../Assets/icons8-me-gusta-24.png" 


export default function LandingCard({title, mass, latitude, longitude}) { 

    return ( 

        <div className="flex gap-4 w-60 h-60 flex-col justify-center align-center bg-navColor text-white rounded-md"> 
                
                <h1 className="text-center">{title}</h1>  
                <div className="bg-rosado w-22 h-0.5 mx-14 "></div> 

                <div className="pl-8"> 
                    <p>Mass: {mass}</p> 
                    <p>Lat: {latitude}</p> 
                    <p>Long: {longitude}</p> 
                </div> 

                <div className="flex w-4 gap-6 mx-14"> 
                    <img src={Modify} alt='modify'/>
                    <img src={Delete} alt='delete'/> 
                    <img src={Favourite} alt='favourite'/>
                </div>
        </div>
            

           
    )
    
}