import React from "react";
import SocialMedia from "../../Components/SocialMedia";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  //useForm Properties
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios.post(baseURL, {
      name: data.name,
      email: data.email,
      message: data.message,
    });
    alert("Thanks for your message");
    reset();
  };

  const baseURL = "https://formspree.io/f/mdoyprwn";

  return (
    <div className="contact">
      <div className="contact-container container">
        <div className="get-in-touch first">
          <h2 data-aos="fade-right">Get in Touch</h2>
          <div className="get-info">
            <p data-aos="fade-left" data-aos-delay="200">
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in Nigeria. But I’m also happy to hear about
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
          <h2 data-aos="fade-down">Contact Me</h2>
          <form
            data-aos="fade-right"
            data-aos-delay="200"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={` form-control ${errors.name && "errorClass"}  `}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Temi Bami"
                {...register("name", {
                  required: "This field is required",
                })}
                onKeyUp={() => trigger("name")}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className={` form-control ${errors.email && "errorClass"}  `}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="TemiBami@gmail.com"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "wrong format",
                  },
                })}
                onKeyUp={() => trigger("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className={` form-control ${errors.message && "errorClass"} `}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="How can I help?"
                {...register("message", {
                  required: "This field is required",
                })}
                onKeyUp={() => trigger("message")}
              />
              {errors.message && <span>{errors.message.message}</span>}
            </div>
            <button type="submit" className="dark">
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
