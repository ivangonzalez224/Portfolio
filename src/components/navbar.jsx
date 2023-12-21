import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import '../assets/styles/NavBar.css';

const NavBar = () => (
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
        <NavLink to="/">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </ul>
    <ul id="nav-ham">
      <li>
        <NavLink to="/"><RxHamburgerMenu /></NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;