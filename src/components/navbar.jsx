import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { GrContact } from "react-icons/gr";
import { TbInfoSquareRounded } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import '../assets/styles/NavBar.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <ul id="nav_name">
        <li className="nav_left">
        <a href="#projects">Iván</a>
        </li>
      </ul>
      <ul id="nav_cartoon">
        <li className="nav_left">
          <a href="#projects"> </a>
        </li>
      </ul>
      <ul id="nav-rigth">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul id="nav-ham">
        <li onClick={toggleDropdown}>
          <a><RxHamburgerMenu /></a>
        </li>
        
      </ul>
      <div className="dropdown-container" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
        <ul className="dropdown-menu">
          <li id="dropdown-top">
            <img></img>
            <button onClick={toggleDropdown}><VscChromeClose /></button>
          </li>
          <li>
            <a href="#projects" onClick={toggleDropdown}><GrProjects className="drop-icon"/> Projects</a>
          </li>
          <li>
            <a href="#about" onClick={toggleDropdown}><TbInfoSquareRounded className="drop-icon"/> About</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleDropdown}><GrContact className="drop-icon"/> Contact</a>
          </li>
          <li>
          </li>
        </ul>
      </div>  
    </nav>
  )
};

export default NavBar;