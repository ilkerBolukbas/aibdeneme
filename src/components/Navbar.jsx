import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">AİBdesing</div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "bar open" : "bar"}></div>
        <div className={open ? "bar open" : "bar"}></div>
        <div className={open ? "bar open" : "bar"}></div>
      </div>
      <ul className={open ? "navbar-links responsive" : "navbar-links"}>
        <li><a href="#anasayfa">Anasayfa</a></li>
        <li><a href="#projeler">Projeler</a></li>
        <li><a href="#hakkimda">Hakkımda</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;