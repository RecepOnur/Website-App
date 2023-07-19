import React from "react";

const MenuItem = ({ name, image, price, onAddToCart }) => {
  const handleAddToCart = () => {
    const newItem = {
      name: name,
      price: price,
    };
    onAddToCart(newItem);
  };

  return (
    <div className="menuItem" onClick={handleAddToCart}>
      <img src={image} alt="" />
      <div className="menuItemContent">
        <p>{name}</p>
        <p>{price} TL</p>
      </div>
    </div>
  );
};

export default MenuItem;
