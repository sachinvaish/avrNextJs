"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ fontFamily: "Centaur Regular", fontSize: "1.4rem" }}>
      {/* start page title section */}
      <section
        className="wow animate__fadeIn parallax"
        data-parallax-background-ratio="0.5"
        style={{ backgroundImage: 'url("images/parallax-bg13.jpg")' }}
      >
        <div className="opacity-medium bg-extra-dark-gray" />
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 extra-small-screen page-title-large d-flex flex-column justify-content-center text-center">
              {/* start page title */}
              <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-15px-bottom">
                "Branding The Customer Experience"
              </h1>
              {/* end page title */}
              {/* start sub title */}
              {/* <span className="text-white-2 opacity6 alt-font">
                – Lao Tzu, Philosopher
                </span> */}
              {/* end sub title */}
            </div>
          </div>
        </div>
      </section>
      {/* end page title section */}
      {/* start contact info */}
      <section className="wow animate__fadeIn" id="contact">
        <div className="container px-0">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
              <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase mb-0">
                We love to talk
              </h5>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
            {/* start contact info item */}
            <div className="col text-center md-margin-eight-bottom sm-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin">
              <div className="d-inline-block margin-20px-bottom">
                <div className="bg-extra-dark-gray icon-round-medium">
                  <i className="icon-map-pin icon-medium text-white-2" />
                </div>
              </div>
              <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                Visit Our Office
              </div>
              <p className="mx-auto">
                H.O- Plot No. 2, Canal Estate
                <br />
                Dehlon-Sanewal Road, Tibba - 141120
              </p>
              {/* <a
                    href="#"
                    className="  text-uppercase text-deep-pink text-small margin-15px-top sm-margin-10px-top d-inline-block"
                >
                    GET DIRECTION
                </a> */}
            </div>
            {/* end contact info item */}
            {/* start contact info item */}
            <div
              className="col text-center md-margin-eight-bottom sm-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.2s"
            >
              <div className="d-inline-block margin-20px-bottom">
                <div className="bg-extra-dark-gray icon-round-medium">
                  <i className="icon-chat icon-medium text-white-2" />
                </div>
              </div>
              <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                Let's Talk
              </div>
              <p className="mx-auto">
                98150-69698 Varun Rakheja
                <br />
                98159-49698 Jaspreet Singh
              </p>
              {/* <a
                    href="#"
                    className="  text-uppercase text-deep-pink text-small margin-15px-top sm-margin-10px-top d-inline-block"
                >
                    call us
                </a> */}
            </div>
            {/* end contact info item */}
            {/* start contact info item */}
            <div
              className="col text-center xs-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.4s"
            >
              <div className="d-inline-block margin-20px-bottom">
                <div className="bg-extra-dark-gray icon-round-medium">
                  <i className="icon-envelope icon-medium text-white-2" />
                </div>
              </div>
              <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                E-mail Us
              </div>
              <p className="mx-auto">
                <a href="mailto:varun@avrproductions.in">
                  varun@avrproductions.in
                </a>
                <br />
                <a href="mailto:info@avrproductions.in">
                  info@avrproductions.in
                </a>
              </p>
              {/* <a
                    href="#"
                    className="  text-uppercase text-deep-pink text-small margin-15px-top sm-margin-10px-top d-inline-block"
                >
                    send e-mail
                </a> */}
            </div>
            {/* end contact info item */}
            {/* start contact info item */}
            {/* <div
                className="col text-center wow animate__fadeInUp last-paragraph-no-margin"
                data-wow-delay="0.6s"
                >
                <div className="d-inline-block margin-20px-bottom">
                    <div className="bg-extra-dark-gray icon-round-medium">
                    <i className="icon-megaphone icon-medium text-white-2" />
                    </div>
                </div>
                <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                    Customer Services
                </div>
                <p className="mx-auto">
                    Lorem Ipsum is simply dummy
                    <br />
                    text of the printing.
                </p>
                <a
                    href="#"
                    className="  text-uppercase text-deep-pink text-small margin-15px-top sm-margin-10px-top d-inline-block"
                >
                    open ticket
                </a>
                </div> */}
            {/* end contact info item */}
          </div>
         
        </div>
      </section>
      {/* end contact info section */}
      {/* start contact form */}
      {/* <section id="contact" className="wow animate__fadeIn p-0 bg-extra-dark-gray">
            <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2">
                <div
                className="col cover-background md-h-450px sm-h-350px wow animate__fadeIn"
                style={{ background: "url(images/contact-img2.jpg)" }}
                />
                <div className="col text-center padding-six-lr padding-five-half-tb lg-padding-four-lr md-padding-ten-half-tb md-padding-twelve-half-lr sm-padding-15px-lr wow animate__fadeIn">
                <div className="text-medium-gray alt-font text-small text-uppercase margin-5px-bottom sm-margin-three-bottom">
                    Fill out the form and we'll be in touch soon!
                </div>
                <h5 className="margin-55px-bottom text-white-2 alt-font font-weight-700 text-uppercase sm-margin-ten-bottom">
                    Ready to request a quote?
                </h5>
                <form
                    id="project-contact-form-4"
                >
                    <div className="row">
                    <div className="col-12">
                        <div className="form-results d-none" />
                    </div>
                    <div className="col-12 col-md-6">
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        id="name"
                        placeholder="Name *"
                        className="bg-transparent border-color-medium-dark-gray medium-input required"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        id="phone"
                        placeholder="Phone"
                        className="bg-transparent border-color-medium-dark-gray medium-input"
                        />
                    </div>
                    <div className="col-12 col-md-12">
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        id="email"
                        placeholder="E-mail *"
                        className="bg-transparent border-color-medium-dark-gray medium-input required"
                        />
                    </div>
                    <div className="col-12">
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={onChange}
                        id="message"
                        placeholder="Describe your project"
                        rows={7}
                        className="bg-transparent border-color-medium-dark-gray medium-textarea"
                        />
                    </div>
                    <div className="col-12 text-center">
                        <button
                        id="project-contact-us-4-button"
                        type="submit"
                        className="btn btn-deep-pink btn-medium margin-15px-top submit"
                        >
                        send message
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section> */}
      {/* end contact form */}
      {/* start map section */}
      <section className="p-0 one-second-screen md-h-400px sm-h-300px wow animate__fadeIn">
        <iframe
          className="w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3426.8686365072813!2d75.94836007558328!3d30.80631797454884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ4JzIyLjciTiA3NcKwNTcnMDMuNCJF!5e0!3m2!1sen!2sin!4v1694226323784!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* end map section */}
      {/* start social section */}
      {/* <section className="wow animate__fadeIn">
            <div className="container">
            <div className="row">
                <div className="col-12 text-center social-style-1 social-icon-style-5">
                <ul className="large-icon mb-0">
                    <li>
                    <a
                        className="facebook"
                        href="http://facebook.com/"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-f" />
                        <span />
                    </a>
                    </li>
                    <li>
                    <a className="twitter" href="http://twitter.com/" target="_blank">
                        <i className="fab fa-twitter" />
                        <span />
                    </a>
                    </li>
                    <li>
                    <a className="google" href="http://google.com/" target="_blank">
                        <i className="fab fa-google-plus-g" />
                        <span />
                    </a>
                    </li>
                    <li>
                    <a
                        className="dribbble"
                        href="http://dribbble.com/"
                        target="_blank"
                    >
                        <i className="fab fa-dribbble" />
                        <span />
                    </a>
                    </li>
                    <li>
                    <a
                        className="linkedin"
                        href="http://linkedin.com/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in" />
                        <span />
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section> */}
      {/* end social section */}
      <section className="wow animate__fadeIn" id="contact">
      <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
              <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase mb-0">
                Work with Us
              </h5>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2" >
            {/* start contact info item */}
            <div className="col text-center md-margin-eight-bottom sm-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin">
              <div className="d-inline-block margin-20px-bottom">
                <div className="bg-extra-dark-gray icon-round-medium">
                  <i className="icon-briefcase icon-medium text-white-2" />
                </div>
              </div>
              <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                Career in AVR
              </div>
              <p className="mx-auto">
              <a href="mailto:hr@avrproductions.in">
                  hr@avrproductions.in
                </a>
              </p>
            </div>
            {/* end contact info item */}
            {/* start contact info item */}
            <div
              className="col text-center md-margin-eight-bottom sm-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.2s"
            >
              <div className="d-inline-block margin-20px-bottom">
                <div className="bg-extra-dark-gray icon-round-medium">
                  <i className=" icon-paintbrush icon-medium text-white-2" />
                </div>
              </div>
              <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                Artist
              </div>
              <p className="mx-auto">
              <a href="mailto:talent@avrproductions.in">
                  talent@avrproductions.in
                </a>
              </p>
              {/* <a
                    href="#"
                    className="  text-uppercase text-deep-pink text-small margin-15px-top sm-margin-10px-top d-inline-block"
                >
                    call us
                </a> */}
            </div>
            {/* end contact info item */}
            {/* start contact info item */}
            <div
              className="col text-center xs-margin-30px-bottom wow animate__fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.4s"
            >
              <div className="d-inline-block margin-20px-bottom">
                <div className="bg-extra-dark-gray icon-round-medium">
                  <i className=" icon-hotairballoon icon-medium text-white-2" />
                </div>
              </div>
              <div className="text-extra-dark-gray text-uppercase text-small font-weight-600 alt-font margin-5px-bottom">
                For Collaborations <br/> (Technical Partners, Exhibition Partners, Gifting and more)
              </div>
              <p className="mx-auto">
                <a href="mailto:collaborate@avrproductions.in">
                  collaborate@avrproductions.in
                </a>
                
              </p>
              {/* <a
                    href="#"
                    className="  text-uppercase text-deep-pink text-small margin-15px-top sm-margin-10px-top d-inline-block"
                >
                    send e-mail
                </a> */}
            </div>
            {/* end contact info item */}
            
          </div>
      </section>
      
    </div>
  );
}
