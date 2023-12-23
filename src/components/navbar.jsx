import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">Iván</NavLink>
        </li>
      </ul>
      <ul id="nav_cartoon">
        <li className="nav_left">
          <NavLink to="/"> </NavLink>
        </li>
      </ul>
      <ul id="nav-rigth">
        <li>
          <NavLink to="/">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
      </ul>
      <ul id="nav-ham">
        <li onClick={toggleDropdown}>
          <NavLink to="/"><RxHamburgerMenu /></NavLink>
        </li>
        
      </ul>
      <div className="dropdown-container" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
        <ul className="dropdown-menu">
          <li id="dropdown-top">
            <img></img>
            <button onClick={toggleDropdown}><VscChromeClose /></button>
          </li>
          <li>
            <NavLink to="/"><GrProjects className="drop-icon"/> Projects</NavLink>
          </li>
          <li>
            <NavLink to="/"><TbInfoSquareRounded className="drop-icon"/> About</NavLink>
          </li>
          <li>
            <NavLink to="/"><GrContact className="drop-icon"/> Contact</NavLink>
          </li>
          <li>
          </li>
        </ul>
      </div>  
    </nav>
  )
};

export default NavBar;