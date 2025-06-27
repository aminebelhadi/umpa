import React from "react";
import image from "../../images/uh-oh.png";
import "./BlogPage.css";

const NotFound: React.FC = () => (
  <div className="blog-page" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <img src={image} alt="Pas de publications" style={{ maxWidth: "52%", marginBottom: 32 }} />
    <p style={{ fontSize: "1.3rem", color: "#E57B51", fontWeight: 600, textAlign: "center" }}>
      Pas de publications disponibles actuellement.<br />Patience, ça arrive !
    </p>
  </div>
);

export default NotFound;