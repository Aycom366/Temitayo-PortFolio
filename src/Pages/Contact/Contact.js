import React from "react";
import SocialMedia from "../../Components/SocialMedia";

function Contact() {
  return (
    <main className="contact">
      <div className="contact-container container">
        <div className="get-in-touch first">
          <h2>Get in Touch</h2>
          <div className="get-info">
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <SocialMedia className={"contact-media"} />
          </div>
        </div>
        <div className="contact-me-page get-in-touch">
          <h2>Contact Me</h2>
          <form autoComplete="off">
            <div className="name form-control">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Temi Bami" />
              <span></span>
            </div>
            <div className="email form-control">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="TemiBami@gmail.com" />
              <span></span>
            </div>
            <div className="message form-control">
              <label htmlFor="message">Message</label>
              <textarea placeholder="How can i help?" />
              <span></span>
            </div>
            <button className="dark">send message</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
