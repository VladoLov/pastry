import image from "../assets/img/c-cake.png";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-img">
        <img src={image} alt="about-img" />
      </div>
      <div className="about-text">
        <h2>
          Ukusne Torte <br />
          Za Dobro Raspoloženje
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          pariatur minima ullam ea id non fuga modi incidunt voluptates unde,
          voluptate, perspiciatis natus, dicta mollitia ducimus exercitationem
          eius? Iste, aliquid.
        </p>
      </div>
    </section>
  );
}

export default About;
