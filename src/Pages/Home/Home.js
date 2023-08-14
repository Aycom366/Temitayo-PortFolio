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
import Ts from "../../images/skills/typescript.png";
import mui from "../../images/skills/mui.jpg";
import node from "../../images/skills/node.png";
import express from "../../images/skills/express.png";
import mongo from "../../images/skills/mongo.jpg";
import mongoose from "../../images/skills/mongoose.jpg";
import chakra from "../../images/skills/chakra.png";
import prisma from "../../images/skills/prisma.svg";
import nest from "../../images/skills/nest.png";
import reactNative from "../../images/skills/react-native.png";
import nextjs from "../../images/skills/nextjs.png";

function Home() {
  let count = 100;
  const [imgArray] = useState([
    html,
    css,
    bootstrap,
    tail,
    chakra,
    styled,
    mui,
    js,
    Ts,
    react,
    reactNative,
    toolkit,
    nextjs,
    node,
    nest,
    express,
    mongo,
    prisma,
    mongoose,
    cSharp,
    vb,
    git,
  ]);
  return (
    <div className='home-container'>
      <div className='hero'>
        <div className='hero-container container'>
          <div data-aos='fade-right' className='mobileback'>
            <img src={mobileBackground} alt='Temitayo' />
          </div>
          <div data-aos='fade-right' className='info'>
            <h1 data-aos='fade-left' data-aos-delay='100'>
              Hey, I'm TemiTayo,
              <br />
              Fullstack Web Developer.
            </h1>
            <button className='btn-about'>
              <div className='about-img'>
                <img
                  data-aos='fade-left'
                  data-aos-delay='200'
                  style={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                  src={downArrow}
                  alt='Arrow Down'
                />
              </div>
              <Link
                style={{ textDecoration: "none" }}
                data-aos='fade-left'
                data-aos-delay='400'
                className='btn-me'
                to='/contact'
              >
                CONTACT ME
              </Link>
            </button>
          </div>
        </div>
      </div>

      <section id='about' className='about'>
        <div className='about-me container'>
          <div className='my-image'>
            <img
              data-aos='fade-right'
              src={Temi}
              alt='Ayomide Temitayo Bamigboye'
            />
          </div>
          <div className='about-me-section'>
            <h2 data-aos='fade-left'>About Me</h2>
            <div data-aos='fade-left' data-aos-delay='400'>
              <p>
                I'm a versatile developer seeking new opportunities in exciting
                companies. My expertise spans both frontend, mobile and backend
                development, enabling me to create holistic solutions. With a
                strong foundation in writing accessible HTML, applying modern
                CSS practices, and producing clean JavaScript code, I ensure
                top-notch user interfaces and smooth user experiences.
              </p>
              <p>
                On the frontend, I specialize in React and TypeScript including
                React Native for mobile developments, crafting robust and
                maintainable applications. My skills extend to the backend as
                well, where I enjoy building APIs, working with databases, and
                managing server-side operations using Node alongside it's
                frameworks. This fullstack capability allows me to create
                end-to-end solutions that meet diverse business needs.
              </p>
              <p>
                As I expand my horizons, I'm eager to explore the realm of
                mobile app development using React Native and TypeScript.
                Crafting user-friendly and performant mobile experiences is an
                exciting challenge I'm ready to embrace.
              </p>
              <p>
                While I'm currently based in Ibadan, Nigeria, I'm open to remote
                work opportunities and have a track record of successful
                collaboration in remote teams. Beyond coding, I find solace
                outdoors and enjoy playing the piano and creating music. Feel
                free to explore my work to see how I can contribute to your
                projects. I'm enthusiastic about connecting and discussing how
                my TypeScript-driven skills can add value to your team.
              </p>
            </div>
            <Link
              data-aos='fade-left'
              data-aos-delay='600'
              className='btn-light btn-portfolio'
              to='/portfolio'
            >
              go to portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* skillds */}
      <section className='skills-section'>
        <section className='container skillsInfo'>
          <section className='flex'>
            <h1>Technical Skills</h1>
            <div className='underline'></div>
          </section>
          <div className='skills-container'>
            {imgArray.map((imgg, index) => {
              count += 100;
              return (
                <div
                  data-aos='fade-up'
                  data-aos-delay={count}
                  key={index}
                  className='img-container'
                >
                  <img className='img-class-cover' src={imgg} alt={imgg} />
                </div>
              );
            })}
          </div>
        </section>
      </section>

      {/* intersted to contact */}
      <div className='interested'>
        <div className='interested-container container'>
          <h2 data-aos='fade-right'>Interested in doing a project together?</h2>
          <div data-aos='fade-down' data-aos-delay='200'></div>
          <Link
            data-aos='fade-left'
            data-aos-delay='400'
            className='btn-light'
            to='/contact'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
