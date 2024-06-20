import heroImg from "../assets/img/home.png";

function Hero() {
  return (
    <div className="home">
      <div className="home-text">
        <h1>
          <span>Welcome</span> to The world of Tasty & Fresh Pizza
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          doloribus cupiditate ab quidem quasi illum nemo veniam fugit nam
          debitis. <br /> Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="home-img">
        <img src={heroImg} alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
