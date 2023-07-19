import React from "react";

const SiparisSidebar = ({ cartItems }) => {
  return (
    <div className="siparisSidebar">
      <h2>Siparişler</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} TL
          </li>
        ))}
      </ul>
      <button>Ödeme Yap</button>
    </div>
  );
};

export default SiparisSidebar;
