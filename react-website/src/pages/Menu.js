import React, { useState } from "react";
import { MenuList } from "../MenuList";
import "../styles/menu.css";
import MenuItem from "../components/MenuItem";
import SiparisSidebar from "../components/SiparisSidebar";
const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const HandleAddToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };
  return (
    <div className="menu">
      <h1>Menümüz</h1>
      <div className="menuList">
        {MenuList.map((corba) => (
          <MenuItem
            key={corba.id}
            name={corba.name}
            image={corba.image}
            price={corba.price}
            onAddToCart={HandleAddToCart}
          ></MenuItem>
        ))}
      </div>
      <SiparisSidebar cartItems={cartItems}></SiparisSidebar>
    </div>
  );
};

export default Menu;
