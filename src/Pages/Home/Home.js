import React, { useState } from "react";
import downArrow from "../../images/icons/down-arrows.svg";
import Temi from "../../images/homepage/desktop/Temi.jpg";
import mobileBackground from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import { Link } from "react-router-dom";
import cSharp from "../../images/skills/c#.png";
import vb from "../../images/skills/vb.png";
import css from "../../images/skills/css.png";
import git from "../../images/skills/git.png";
import html from "../../images/skills/html.png";
import js from "../../images/skills/js.png";
import react from "../../images/skills/react.png";
import toolkit from "../../images/skills/toolKit.png";
import styled from "../../images/skills/styled.png";
import bootstrap from "../../images/skills/bootstrap.png";
import tail from "../../images/skills/tailwind.png";

function Home() {
  let count = 100;
  const [imgArray] = useState([
    html,
    css,
    bootstrap,
    tail,
    js,
    react,
    toolkit,
    styled,
    cSharp,
    vb,
    git,
  ]);
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-container container">
          <div data-aos="fade-right" className="mobileback">
            <img src={mobileBackground} alt="Temitayo" />
          </div>
          <div data-aos="fade-right" className="info">
            <h1 data-aos="fade-left" data-aos-delay="100">
              Hey, I'm TemiTayo
              <br />
              Freelance Web designer And C# developer.
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
              <Link
                style={{ textDecoration: "none" }}
                data-aos="fade-left"
                data-aos-delay="400"
                className="btn-me"
                to="/contact"
              >
                CONTACT ME
              </Link>
            </button>
          </div>
        </div>
      </div>

      <section id="about" className="about">
        <div className="about-me container">
          <div className="my-image">
            <img
              data-aos="fade-right"
              src={Temi}
              alt="Ayomide Temitayo Bamigboye"
            />
          </div>
          <div className="about-me-section">
            <h2 data-aos="fade-left">About Me</h2>
            <p data-aos="fade-left" data-aos-delay="400">
              I’m a front-end developer looking for a new role in an exciting
              company. I focus on writing accessible HTML, using modern CSS
              practices and writing clean JavaScript. When writing JavaScript
              code, I mostly use React, but I can adapt to whatever tools are
              required. I’m based in Nigeria, the city of Ibadan, but I’m happy
              working remotely and have experience in remote teams. When I’m not
              coding, you’ll find me outdoors. I love music especially playing
              piano. I'd love you to check my work.
            </p>
            <Link
              data-aos="fade-left"
              data-aos-delay="600"
              className="btn-light btn-portfolio"
              to="/portfolio"
            >
              go to portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* skillds */}
      <section className="skills-section">
        <section className="container skillsInfo">
          <section className="flex">
            <h1>Skills</h1>
            <div className="underline"></div>
          </section>
          <div className="skills-container">
            {imgArray.map((imgg, index) => {
              count += 100;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={count}
                  key={index}
                  className="img-container"
                >
                  <img className="img-class-cover" src={imgg} alt={imgg} />
                </div>
              );
            })}
          </div>
        </section>
      </section>

      {/* intersted to contact */}
      <div className="interested">
        <div className="interested-container container">
          <h2 data-aos="fade-right">Interested in doing a project together?</h2>
          <div data-aos="fade-down" data-aos-delay="200"></div>
          <Link
            data-aos="fade-left"
            data-aos-delay="400"
            className="btn-light"
            to="/contact"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
