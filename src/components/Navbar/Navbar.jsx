import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO WEB.svg";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState("");

  const openClose = () => {
    open === "navbar__is-active" ? setOpen("") : setOpen("navbar__is-active");
  };
  const closeMenu = () => {
    setOpen("");
  };
  return (
    <>
      <nav className="navbar__container">
        <div className="navbar__logo">
          <NavLink to="/home">
            <img src={logo} alt="yeha stretching logo" />
          </NavLink>
        </div>
        <div className="navbar__link__container">
          <NavLink className="navbar__link" to="/home">Home</NavLink>
          <NavLink className="navbar__link" to="/about">Sobre Mi</NavLink>
          <NavLink className="navbar__link" to="/service">Servicios</NavLink>
          <NavLink className="navbar__link" to="/contact">Contacto</NavLink>
        </div>
        <button
          className={`navbar__hamburger ${open}`}
          onClick={() => {
            openClose();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <nav className="navbar__mobile">
        <div className={`navbar__mobile__container ${open}`}>
          <NavLink className="navbar__link" to="/home" onClick={closeMenu}>Home</NavLink>
          <NavLink className="navbar__link" to="/about" onClick={closeMenu}>Sobre Mi</NavLink>
          <NavLink className="navbar__link" to="/service" onClick={closeMenu}>Servicios</NavLink>
          <NavLink className="navbar__link" to="/contact" onClick={closeMenu}>Conacto</NavLink>
        </div>
      </nav>
    </>
  );
};
