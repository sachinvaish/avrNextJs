"use client";
import React from 'react'

export default function Counter() {
  return (
    <section className="wow animate__fadeIn">
    <h3 className="alt-font row justify-content-center align-items-center" style={{marginBottom:'100px'}}>Our Numbers</h3>
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        {/* start counter box item */}
        <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={18}
                data-speed={2000}
              >
                18+
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.2s"
        >
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-camera text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={1000}
                data-speed={2000}
              >
                1000+
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Retail Store Launches
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left xs-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.4s"
        >
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-laptop text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={20}
                data-speed={2000}
              >
                20+
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                States Conquered
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.6s"
        >
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-chat text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={100}
                data-speed={2000}
              >
                100+
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Crew Members
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
      </div>
    </div>
    <div className="container" style={{marginTop:'60px'}}>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        {/* start counter box item */}
        <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-desktop text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={300}
                data-speed={2000}
              >
                300+
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Cities
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.2s"
        >
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-camera text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                data-to={500}
                data-speed={2000}
              >
                500+
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                B2B & B2C Events
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        {/* start counter box item */}
        <div
          className="col md-padding-twelve-left xs-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight"
          data-wow-delay="0.4s"
        >
          <div className="feature-box-5 position-relative">
            {/* <i className="icon-laptop text-medium-gray icon-extra-medium top-6" /> */}
            <div className="feature-content">
              <h6
                className="d-block text-extra-dark-gray font-weight-600 alt-font margin-5px-bottom mb-md-0 counter"
                
                data-speed={2000}
              >
                ∞
              </h6>
              <span className="text-small text-uppercase position-relative top-minus4">
                Ideas
              </span>
            </div>
          </div>
        </div>
        {/* end counter box item */}
        
      </div>
    </div>
    
  </section>
  )
}
