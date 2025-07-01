import React from 'react'
import "../App.css";

const Banner = () => {
  return (
    <div className="main-bg">
      <div className="container">
        <div className="left-side">
          <h1 className="main-title">
            Web Tasarımcısı
            <br />
            Merhaba, ben İlker
          </h1>
          <p className="subtitle">
            Etkileyici ve modern web siteleri oluşturuyorum.
          </p>
          <button className="projects-btn">Projeler</button>
          
        </div>
        
      </div>
    </div>
  )
}

export default Banner