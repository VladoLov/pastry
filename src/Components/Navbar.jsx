import { Link } from "react-scroll";
import logo from "../assets/img/logo4.png";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Navbar() {
  useEffect(() => {
    const header = document.querySelector("nav.header");
    const menu = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    const handleMenuClick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };

    const handleWindowScroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("open");
    };

    window.addEventListener("scroll", handleScroll);
    menu.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleWindowScroll);

    const sr = ScrollReveal({
      distance: "30px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".home-text", { delay: 200, origin: "left" });
    sr.reveal(".home-img", { delay: 200, origin: "right" });
    sr.reveal(".container, .about, .menu, .contact", {
      delay: 200,
      origin: "bottom",
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menu.removeEventListener("click", handleMenuClick);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

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
