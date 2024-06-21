import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import mainProduct from "../assets/img/chocolate-cake.jpeg";
import mainProduct2 from "../assets/img/tri-lece.jpeg";
import mainProduct3 from "../assets/img/schwarzwald.jpeg";
import mainProduct4 from "../assets/img/sampita.png";

function Menu() {
  return (
    <section className="section menu" id="menu">
      <div className="main-text">
        <h2>Najpopularnije torte i kolači</h2>
        <p>
          Odbarali smo za Vas <br /> najbolje sastojke
        </p>
      </div>
      <div className="menu-content">
        <div className="row">
          <img src={mainProduct} alt="main-product-1" />
          <div className="menu-text">
            <div className="menu-left">
              <h4>Čokoladna Torta</h4>
            </div>
            <div className="menu-right">
              <h5>35.00 BAM</h5>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            molestiae harum illo ex nam, distinctio nostrum. Dicta fuga velit
            non.
          </p>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>

        <div className="row">
          <img src={mainProduct2} alt="main-product-2" />
          <div className="menu-text">
            <div className="menu-left">
              <h4>Tri leće</h4>
            </div>
            <div className="menu-right">
              <h5>35.00 BAM</h5>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            molestiae harum illo ex nam, distinctio nostrum. Dicta fuga velit
            non.
          </p>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>

        <div className="row">
          <img src={mainProduct3} alt="main-product-3" />
          <div className="menu-text">
            <div className="menu-left">
              <h4>Švarcvald</h4>
            </div>
            <div className="menu-right">
              <h5>35.00 BAM</h5>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            molestiae harum illo ex nam, distinctio nostrum. Dicta fuga velit
            non.
          </p>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>

        <div className="row">
          <img src={mainProduct4} alt="main-product-4" />
          <div className="menu-text">
            <div className="menu-left">
              <h4>Šampita</h4>
            </div>
            <div className="menu-right">
              <h5>35.00 BAM</h5>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            molestiae harum illo ex nam, distinctio nostrum. Dicta fuga velit
            non.
          </p>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaRegStar className="star" />
        </div>
      </div>
    </section>
  );
}

export default Menu;
