import React from "react";
import Logo from "../assets/corba.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="corba" />
        <span>Çorbacı</span>
      </div>
      <div className="rightSide">
        <Link to="/">Anasayfa</Link>
        <Link to="/menu">Menü</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </div>
  );
};

export default Navbar;
