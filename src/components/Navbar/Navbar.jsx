import { NavLink } from "react-router-dom";
import logo from "../../assets/logo 2.svg";
import { useState } from "react";
import { Footer } from "../Footer";

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
        <NavLink className={`navbar__logo ${open}`} to="/home">
          <img className="logo__nav" src={logo} alt="yeha stretching logo" />
        </NavLink>
        <div className="navbar__link__container">
          <NavLink className="navbar__link" to="/home">
            Home
          </NavLink>
          <NavLink className="navbar__link" to="/about">
            Sobre Mi
          </NavLink>
          <NavLink className="navbar__link" to="/service">
            Servicios
          </NavLink>
          <NavLink className="navbar__link" to="/contact">
            Contacto
          </NavLink>
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
          <div className="mobile__link">
            <NavLink className="navbar__link" to="/home" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink className="navbar__link" to="/about" onClick={closeMenu}>
              Sobre Mi
            </NavLink>
            <NavLink className="navbar__link" to="/service" onClick={closeMenu}>
              Servicios
            </NavLink>
            <NavLink className="navbar__link" to="/contact" onClick={closeMenu}>
              Conacto
            </NavLink>
          </div>
          <div className="footer_nav">
            <Footer />
          </div>
        </div>
      </nav>
    </>
  );
};
