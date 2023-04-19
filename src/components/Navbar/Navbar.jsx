import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className='navbar__container'>
            <NavLink to="/about">Sobre Mi</NavLink>
            <NavLink to="/home">Yeah Stretching</NavLink>
            <NavLink to="/contact">Conacto!</NavLink>
        </nav>
    )
}
