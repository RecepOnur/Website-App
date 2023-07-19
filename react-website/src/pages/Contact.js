import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Bizimle İletişime Geçin</h1>
      <div className="form">
        <label htmlFor="">İsim Soyisim</label>
        <input type="text" placeholder="İsminizi ve soyisminizi giriniz" />
        <label htmlFor="">E-posta</label>
        <input type="text" placeholder="E-postanızı giriniz" />
        <label htmlFor="">Mesajınız</label>
        <textarea name="" id="" cols="30" rows="7"></textarea>
        <button>Gönder</button>
      </div>
    </div>
  );
};

export default Contact;
