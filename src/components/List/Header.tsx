import React from "react";
import { ReactComponent as BackIcon } from "../../assets/svg/back.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a href="/" className="header__back">
        <BackIcon />
      </a>
      <h3 className="header__title">Weather history</h3>
    </div>
  );
};

export default Header;
