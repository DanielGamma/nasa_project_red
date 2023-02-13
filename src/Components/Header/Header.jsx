import Logo from "../../Components/Logo/Logo" 
import NavLink from '../NavLink/NavLink'

export default function Header() {

    return ( 
        <> 
            <Logo />

            <ul>
                <NavLink 
                    nameLink = 'Home'/> 
                <NavLink 
                    nameLink= 'Map' /> 
                <NavLink 
                    nameLink= 'Landings' /> 
                <NavLink 
                    nameLink= 'Favourites' />
            </ul> 
        </>
    )
}