"use client";
import React from 'react'
export default function Slider() {
  return (
    <section className="wow animate__fadeIn p-0 main-slider mobile-height top-space"   id='#home' >


    <div
      className="swiper-full-screen swiper-container w-100 white-move"
      data-slider-options='{ "loop": true, "slidesPerView": "1", "allowTouchMove":true, "autoplay": { "delay": 5000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "navigation": { "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev" }, "pagination": { "el": ".swiper-pagination", "clickable": true } }'
    >
      <div className="swiper-wrapper">
        {/* start slider item */}
        <div
          className="swiper-slide cover-background "
          style={{ backgroundImage: 'url("images/homepage-5-slider-img-3.jpg")'}}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray" />
          <div className="container position-relative one-fourth-screen sm-h-400px">
            <div className="row h-100">
              <div className="col-12 d-flex flex-column justify-content-center text-center">
                <span style={{fontFamily:'Centaur Regular'}} className="text-large text-very-light-gray font-weight-300 w-95 mx-auto margin-25px-bottom d-block sm-margin-15px-bottom">
                  Empowering Creativity through Design Thinking in 
                </span>
                <h1 className="alt-font text-uppercase text-white-2 font-weight-700 w-75 sm-w-95 mx-auto margin-35px-bottom sm-margin-15px-bottom">
                Crafting User Centric Experiences
                </h1>
                {/* <div className="btn-dual">
                  <a
                    href="https://1.envato.market/g7jrr"
                    target="_blank"
                    className="btn btn-white btn-rounded btn-medium sm-margin-two-all"
                  >
                    Explore
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* end slider item */}
        {/* start slider item */}
        {/* <div
          className="swiper-slide cover-background"
          style={{ backgroundImage: 'url("images/homepage-5-slider-img-1.jpg")' }}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray" />
          <div className="container position-relative one-fourth-screen sm-h-400px">
            <div className="row h-100">
              <div className="col-12 d-flex flex-column justify-content-center text-center">
                <span className="text-large text-very-light-gray font-weight-300 w-95 mx-auto margin-25px-bottom d-block sm-margin-15px-bottom">
                  We're a design studio that believe in the ideas
                </span>
                <h1 className="alt-font text-uppercase text-white-2 font-weight-700 w-75 sm-w-95 mx-auto margin-35px-bottom sm-margin-15px-bottom">
                  Highly Creative Solutions
                </h1>
                <div className="btn-dual">
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-white btn-rounded btn-medium sm-margin-two-all"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* end slider item */}
        {/* start slider item */}
        {/* <div
          className="swiper-slide cover-background"
          style={{ backgroundImage: 'url("images/homepage-5-slider-img-2.jpg")' }}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray" />
          <div className="container position-relative one-fourth-screen sm-h-400px">
            <div className="row h-100">
              <div className="col-12 d-flex flex-column justify-content-center text-center">
                <span className="text-large text-very-light-gray font-weight-300 w-95 mx-auto margin-25px-bottom d-block sm-margin-15px-bottom">
                  We are a design &amp; development agency
                </span>
                <h1 className="alt-font text-uppercase text-white-2 font-weight-700 w-75 sm-w-95 mx-auto margin-35px-bottom sm-margin-15px-bottom">
                  Craft Elegant Solutions
                </h1>
                <div className="btn-dual">
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-white btn-rounded btn-medium sm-margin-two-all"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* end slider item */}
      </div>
      {/* start slider pagination */}
      {/* <div className="swiper-pagination swiper-pagination-white" /> */}
      {/* end slider pagination */}
      {/* start slider navigation */}
      {/* <div class="swiper-button-next light"><i class="ti-angle-right"></i></div>
            <div class="swiper-button-prev light"><i class="ti-angle-left"></i></div> */}
      {/* end slider navigation */}
    </div>
  </section>


  )
}
