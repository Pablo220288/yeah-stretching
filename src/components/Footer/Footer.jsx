import { Link } from "react-router-dom";
import logo from "../../assets/logo 2.svg";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer__container">
      <img className="footer__img" src={logo} alt="yeha stretching logo" />
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
          to="https://api.whatsapp.com/qr/WCIAORYRAY2ZN1?autoload=1&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};
