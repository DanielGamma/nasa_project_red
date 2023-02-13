import { Link } from "react-router-dom";

export default function NavLink({nameLink}) {
    return ( 
        <li> 
            <Link className="hover:h-1 after:h-1 before:h-1">{nameLink}</Link>                    
        </li>
    )
}