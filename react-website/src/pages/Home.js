import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/corba_background.jpg";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <h1>Çorbacınız</h1>
        <p>Lezzetli çorbalar burada !</p>
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
