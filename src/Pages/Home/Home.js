import React, { useState, useEffect } from "react";
import downArrow from "../../images/icons/down-arrows.svg";
import Temi from "../../images/homepage/desktop/Temi.jpg";
import mobileBackground from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-container">
      <section className="hero">
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
      </section>

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
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in Nigeria, the city of Ibadan, but
              I’m happy working remotely and have experience in remote teams.
              When I’m not coding, you’ll find me outdoors. I love music
              especially playing piano. I'd love you to check my work.
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
          <div className=" skills-container">
            <div data-aos="fade-right" className="skillsCon">
              <p>HTML/CSS</p>
              <div className="container-skills">
                <div className="skills html">90%</div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="skillsCon"
            >
              <p>Javscript</p>
              <div className="container-skills">
                <div className="skills javascript">70%</div>
              </div>
            </div>
            <div data-aos="fade-right" className="skillsCon">
              <p>React</p>
              <div className="container-skills">
                <div className="skills react">80%</div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="skillsCon"
            >
              <p>C#</p>
              <div className="container-skills">
                <div className="skills C">60%</div>
              </div>
            </div>
            <div data-aos="fade-right" className="skillsCon">
              <p>Visual Basic</p>
              <div className="container-skills">
                <div className="skills vb">70%</div>
              </div>
            </div>
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
    </main>
  );
}

export default Home;
