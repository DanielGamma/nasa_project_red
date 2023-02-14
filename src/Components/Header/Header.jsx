import Logo from "../../Components/Logo/Logo" 
import NavLink from '../NavLink/NavLink'  



export default function Header() {

    return ( 
        <> 
            <Logo />

        <nav> 
            <ul>
                <NavLink 
                    path='/'
                    nameLink = 'Home'/> 
                <NavLink 
                    path='landings'
                    nameLink= 'Map' /> 
                <NavLink 
                    path='landings/list'
                    nameLink= 'Landings' /> 
                <NavLink 
                    path='favourites'
                    nameLink= 'Favourites' />
            </ul> 
        </nav>
        </>
    )
}