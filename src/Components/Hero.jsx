import heroImg from "../assets/img/home2.jpg";

function Hero() {
  return (
    <div className="home" id="home">
      <div className="home-text">
        <h1>
          Dobrodošli u <span>Laterna Cake House</span> neka naša torta zasladi
          vaš dan!
        </h1>
        <p>
          Dobrodošli u svet neodoljivih kolača, raskošnih torti, osvežavajuće
          limunade i kremastog sladoleda. Pripremamo za vas najbolje delicije,
          savršene za svaku priliku. <br /> Otkrijte našu ponudu i prepustite se
          uživanju u svakom zalogaju!
        </p>
      </div>
      <div className="home-img">
        <img src={heroImg} alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
