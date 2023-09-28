"use client";
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-classic-dark bg-extra-dark-gray padding-five-bottom sm-padding-30px-bottom"  style={{fontFamily:'Centaur Regular',fontSize:'1rem', height:'100px'}}>
      <div className="bg-dark-footer padding-50px-tb sm-padding-30px-tb">
        <div className="container">
          <div className="row align-items-center">
            {/* start slogan */}
            <div className="col-lg-4 col-md-5 text-center alt-font sm-margin-15px-bottom">
            Copyright &copy; AVR Productions 2023
            </div>
            {/* end slogan */}
            {/* start logo */}
            <div className="col-lg-4 col-md-2 text-center sm-margin-10px-bottom">
              <a href="#">
                <img
                  src="images/logo-white.png"
                  alt="Avr Productions"
                  style={{width:'auto',height:'60px', marginLeft:'0'}}
                />
              </a>
            </div>
            {/* end logo */}
            {/* start social media */}
            <div className="col-lg-4 col-md-5 text-center">
              <span className="alt-font margin-20px-right md-margin-15px-right">
                On social networks
              </span>
              <div className="social-icon-style-8 d-inline-block align-middle">
                <ul className="small-icon mb-0">
                  <li>
                    <a
                      className="facebook text-white-2"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter text-white-2"
                      href="https://twitter.com/"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="google text-white-2"
                      href="https://plus.google.com/"
                      target="_blank"
                    >
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram text-white-2"
                      href="https://instagram.com/avrproductionsbrandservices"
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram no-margin-right"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end social media */}
          </div>
        </div>
      </div>
      
    </footer>

  )
}
