import React from "react";
import downArrow from "../../images/icons/down-arrows.svg";
import personDesktop from "../../images/homepage/desktop/image-homepage-profile@2x.jpg";
import personTablet from "../../images/homepage/tablet/image-homepage-profile@2x.jpg";
import personMobile from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import { useGlobalContext } from "../../context";
import mobileBackground from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";

function Home() {
  const { getWidth } = useGlobalContext();
  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-container container">
          <div className="mobileback">
            <img src={mobileBackground} alt="Temitayo" />
          </div>
          <div className="info">
            <h1>
              Hey, I'm Ayomide Temitayo and I love building beautiful websites
            </h1>
            <button className="btn-about">
              <div className="about-img">
                <img
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                  src={downArrow}
                  alt="Arrow Down"
                />
              </div>
              <p className="btn-me">ABOUT ME</p>
            </button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-me container">
          <div className="my-image">
            <img
              src={
                getWidth < 600
                  ? personMobile
                  : getWidth > 600 && getWidth <= 768
                  ? personTablet
                  : personDesktop
              }
              alt="Ayomide Temitayo Bamigboye"
            />
          </div>
          <div className="about-me-section">
            <h2>About Me</h2>
            <p>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in Nigeria, the city of Ibadan, but
              I’m happy working remotely and have experience in remote teams.
              When I’m not coding, you’ll find me outdoors. I love music
              especially playing piano. I'd love you to check my work.
            </p>
            <button className="btn-light btn-portfolio">go to portfolio</button>
          </div>
        </div>
      </section>
      <div className="interested">
        <div className="interested-container container">
          <h2>Interested in doing a project together?</h2>
          <div></div>
          <button className="btn-light">Contact Me</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
