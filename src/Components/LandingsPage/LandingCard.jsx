
import { useState } from "react";
import { FaTrashAlt, FaHeart, FaRegHeart, FaEdit } from "react-icons/fa";


export default function LandingCard({ title, mass, latitude, longitude, id }) {

    const [fav, setFav] = useState(false)

    const btnFavourite = () => {
        setFav(prev => !prev)
        if (fav === true) {
            let idsLandings = JSON.parse(localStorage.getItem('idsLandings'))
            let idsLandingsFiltrados = idsLandings.filter(ids => ids !== id)
            localStorage.setItem('idsLandings',(JSON.stringify(idsLandingsFiltrados)))
        } else {
            localStorage.setItem('idsLandings', (JSON.stringify([...(JSON.parse(localStorage.getItem('idsLandings'))) || [], id])));
        }
    }

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

                <p><FaEdit /></p>
                <p><FaTrashAlt /></p>
                <p onClick={btnFavourite}>{fav ? <FaHeart className="hover:scale-110" /> : <FaRegHeart className="hover:scale-110" />}</p>
            </div>
        </div>
    )
}