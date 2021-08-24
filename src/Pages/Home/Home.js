import React from "react";
import downArrow from "../../images/icons/down-arrows.svg";
import Temi from "../../images/homepage/desktop/Temi.jpg";
import mobileBackground from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";

function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-container container">
          <div data-aos="fade-right" className="mobileback">
            <img src={mobileBackground} alt="Temitayo" />
          </div>
          <div className="info">
            <h1 data-aos="fade-left">
              Hey, I'm Ayomide Temitayo and I love building beautiful websites
            </h1>
            <button className="btn-about">
              <div className="about-img">
                <img
                  data-aos="fade-left"
                  data-aos-delay="200"
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                  src={downArrow}
                  alt="Arrow Down"
                />
              </div>
              <p data-aos="fade-left" data-aos-delay="400" className="btn-me">
                ABOUT ME
              </p>
            </button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-me container">
          <div className="my-image">
            <img
              data-aos="fade-right"
              src={
                Temi
                // getWidth < 600
                //   ? personMobile
                //   : getWidth > 600 && getWidth <= 768
                //   ? personTablet
                //   : personDesktop
              }
              alt="Ayomide Temitayo Bamigboye"
            />
          </div>
          <div className="about-me-section">
            <h2 data-aos="fade-left">About Me</h2>
            <p data-aos="fade-left" data-aos-delay="400">
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in Nigeria, the city of Ibadan, but
              I’m happy working remotely and have experience in remote teams.
              When I’m not coding, you’ll find me outdoors. I love music
              especially playing piano. I'd love you to check my work.
            </p>
            <button
              data-aos="fade-left"
              data-aos-delay="600"
              className="btn-light btn-portfolio"
            >
              go to portfolio
            </button>
          </div>
        </div>
      </section>
      <div className="interested">
        <div className="interested-container container">
          <h2 data-aos="fade-right">Interested in doing a project together?</h2>
          <div data-aos="fade-down" data-aos-delay="200"></div>
          <button
            data-aos="fade-left"
            data-aos-delay="400"
            className="btn-light"
          >
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
