import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="screen__wrapper">
        <img src="/images/logo.svg" alt="logo" />
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
