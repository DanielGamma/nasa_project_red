import { Link } from "react-router-dom";

export default function NavLink({nameLink, path}) {
    return ( 
        <li> 
            <Link className="text-white hover:border-t-2 hover:border-b-2 " to={path}>{nameLink}</Link>                    
        </li>
    )
}