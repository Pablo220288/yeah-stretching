import { Link } from "react-router-dom";
// import logo from "../../assets/logo 2.svg";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer__container">
      <img
        className="footer__img"
        src="https://res.cloudinary.com/ferjen/image/upload/v1683841391/yeah_stretching/icons/ys-logo_yhsytc.svg"
        alt="Logo de Yeah Stretching. Silueta en rosado de una mujer haciendo stretching y una mariposa dertás."
      />

      <span className="footer__mail">yamilaleilasayag@gmail.com</span>

      <div className="link__container">
        <Link
          className="footer__link"
          to="https://www.linkedin.com/in/yamilasayag/"
          target="_blank"
        >
          <FaLinkedinIn />

        </Link>

        <Link
          className="footer__link"
          to="https://www.instagram.com/yeah_stretching/"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          className="footer__link"
          to="https://api.whatsapp.com/send?phone=5491132197694"
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};
