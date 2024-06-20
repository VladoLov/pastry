import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="header">
      <img href="#" className="logo" src={logo} alt="logo" />
      <ul className="navbar">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <RiMenu3Line className="menu-icon" />
    </nav>
  );
}

export default Navbar;
