import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => (
  <nav>
    <ul>
      <li id="nav_left">
        <NavLink to="/">Iván</NavLink>
      </li>
    </ul>
    <ul id="nav-rigth">
      <li id="nav_left">
        <NavLink to="/">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;