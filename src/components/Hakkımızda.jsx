import React from 'react'

import "../App.css";

const Hakkımızda = () => {
  return (
     <section className="about-section">
      <h2 className="about-title">Hakkımda</h2>
      <div className="about-content">
        <p>
          3 yıllık deneyime sahip bir web tasarımcıyım.<br />
          Kullanıcı dostu ve estetik açıdan hoş web siteleri tasarlamaya odaklanıyorum.
        </p>
        <div className="contact-info">
          <h3>İletişim</h3>
          <p>ilker.bolukbas@hotmail.com</p>
        </div>
      </div>
    </section>
  )
}

export default Hakkımızda