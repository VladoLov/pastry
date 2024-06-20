import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.png";
import b3 from "../assets/img/b3.png";
import b4 from "../assets/img/b4.png";

function Container() {
  return (
    <div className="container">
      <div className="main-text">
        <h2>Ingredients</h2>
        <p>Only the best for you</p>
      </div>
      <div className="container-box">
        <div className="c-mainbox">
          <div className="container-img">
            <img src={b1} alt="box1" />
          </div>
          <div className="container-text">
            <p>Delicate Dough</p>
          </div>
        </div>
        <div className="c-mainbox">
          <div className="container-img">
            <img src={b2} alt="box2" />
          </div>
          <div className="container-text">
            <p>Tomatoes</p>
          </div>
        </div>
        <div className="c-mainbox">
          <div className="container-img">
            <img src={b3} alt="box3" />
          </div>
          <div className="container-text">
            <p>Cheese</p>
          </div>
        </div>
        <div className="c-mainbox">
          <div className="container-img">
            <img src={b4} alt="box4" />
          </div>
          <div className="container-text">
            <p>Sausage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
