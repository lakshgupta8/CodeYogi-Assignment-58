import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-10 sm:px-20 lg:px-40 flex bg-white">
      <nav className="w-1/2 self-center bg-white">
        <Link to="/home">
          <img
            src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg"
            alt="Logo"
            className="h-16"
          />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
