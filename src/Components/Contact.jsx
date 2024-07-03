import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="main-contact">
        <div className="contact-content">
          <h4>Usluge</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
                Mob preko What&apos;s Up-a i Viber-a
              </a>
            </li>
            <li>
              <a href="lovric_v@hotmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
