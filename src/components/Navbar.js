import React from "react";
import REACTLOGO from "../images/logo-react.png";

export default function Navbar() {
  return (
    <nav>
      <img src={REACTLOGO} className="nav--icon" alt="react logo for navbar" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Facts - By Judith</h4>
    </nav>
  );
}
