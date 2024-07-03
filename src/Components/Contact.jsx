import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
/* import { FaViber } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa"; */

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="main-contact">
        <div className="contact-content">
          <h4>Sekcije</h4>
          <ul>
            <li>
              <a href="#home">
                <MdHome />
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <GrContactInfo />O Nama
              </a>
            </li>
            <li>
              <a href="#menu">
                <MdOutlineRestaurantMenu />
                Menu
              </a>
            </li>
            <li>
              <a href="#contact">
                <MdContactPhone />
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-content">
          <h4>Pratite nas</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/_caffelanterna_?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icons" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="social-icon" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-content">
          <h4>Kontakt</h4>
          <ul>
            <li>
              <a href="tel:+38761692250">
                <FaWhatsapp />
                +38761692250
                <br />
                {/* <FaPhoneAlt /> */}
                {/* <FaViber /> */}
              </a>
            </li>
            <li>
              <a href="lovric_v@hotmail.com">
                <FaMailBulk />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
