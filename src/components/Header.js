import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    if (selectedItem === index) {
      return;
    }

    setSelectedItem(index);
  };
  return (
    <header className="header">
      <ul className="menu-list">
        <li
          className={selectedItem === 0 ? "active" : ""}
          onClick={() => handleItemClick(0)}
        >
          <Link to="/design" className="name">
            UI/UX Design
          </Link>
        </li>
        <li
          className={selectedItem === 1 ? "active" : ""}
          onClick={() => handleItemClick(1)}
        >
          <Link to="/development" className="name">
            Development
          </Link>
        </li>
        <li
          className={selectedItem === 2 ? "active" : ""}
          onClick={() => handleItemClick(2)}
        >
          <Link to="/full-branding" className="name">
            Full Branding
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
