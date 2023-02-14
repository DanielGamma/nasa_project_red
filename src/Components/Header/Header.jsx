import Logo from "../../Components/Logo/Logo" 
import NavLink from '../NavLink/NavLink'  



export default function Header() {

    return ( 
        <header className="flex justify-between px-10 bg-navColor items-center"> 
            <Logo />

            <nav> 
                <ul className="flex gap-x-7 ">
                    <NavLink path='/' nameLink = 'Home'/> 
                    <NavLink path='landings' nameLink= 'Map' /> 
                    <NavLink path='landings/list' nameLink= 'Landings' /> 
                    <NavLink path='favourites' nameLink= 'Favourites' />
                </ul> 
            </nav>
        </header>
    )
}