
// import { Link } from "react-router-dom"

export default function NavButton({nameLink}) {
    return ( 
        <ul> 
            <li> 
                <h1 className="hover:h-1 after:h-1 before:h-1">{nameLink}</h1>                     
            </li> 
        </ul>
    )
}