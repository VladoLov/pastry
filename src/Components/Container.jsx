import cake from "../assets/img/cake.jpg";
import coffee from "../assets/img/coffee.jpg";
import lemonade from "../assets/img/lemonade.jpg";
import icecream from "../assets/img/ice-cream.jpg";

function Container() {
  return (
    <div className="container">
      <div className="main-text">
        <h2>U ponudi</h2>
        <p>Samo najbolji proizvodi za Vas</p>
      </div>
      <div className="container-box">
        <div className="c-mainbox">
          <div className="container-img">
            <img src={cake} alt="box1" />
          </div>
          <div className="container-text">
            <p>Torta</p>
          </div>
        </div>
        <div className="c-mainbox">
          <div className="container-img">
            <img src={coffee} alt="box2" />
          </div>
          <div className="container-text">
            <p>Kafa</p>
          </div>
        </div>
        <div className="c-mainbox">
          <div className="container-img">
            <img src={lemonade} alt="box3" />
          </div>
          <div className="container-text">
            <p>Limunada</p>
          </div>
        </div>
        <div className="c-mainbox">
          <div className="container-img">
            <img src={icecream} alt="box4" />
          </div>
          <div className="container-text">
            <p>Sladoled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
