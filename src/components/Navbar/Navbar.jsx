import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO WEB.svg"

export const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__logo">
        <NavLink to="/home">
          <img src={logo} alt="yeha stretching logo" />
        </NavLink>
      </div>
      <div className="navbar__link__container">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">Sobre Mi</NavLink>
        <NavLink to="/service">Servicios</NavLink>
        <NavLink to="/contact">Conacto</NavLink>
      </div>
    </nav>
  );
};
