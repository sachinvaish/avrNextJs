"use client";
import React, { useRef } from 'react'

export default function Header() {

  const reload = ()=>{
    window.location.href = '#';
    collapseMenu();
  }

  const toggleMenu = useRef(0);
  const collapseMenu = ()=>{
    toggleMenu.current.click();
  }

  return (
    <header  >
      <nav className="navbar navbar-default bootsnav navbar-top header-light-transparent background-transparent navbar-expand-lg on no-full">
        <div className="container-lg nav-header-container" >
          {/* start logo */}
          <div className="col-auto ps-0">
            <a href='#' onClick={reload} title="AVR Productions" >
              <img
                src="images/logo.png"
                data-at2x="images/logo@2x.png"
                className="logo-dark default"
                alt="AVR Productions"
                style={{width:'auto',height:'50px',margin:'20px', marginLeft:'0'}}
              />
            </a>
          </div>
          {/* end logo */}
          <div className="col accordion-menu pe-0 pe-md-3">
            <button
              ref={toggleMenu}
              type="button"
              className="navbar-toggler collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-collapse-toggle-1"
            >
              <span className="sr-only">toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbar-collapse-toggle-1"
            >
              <ul
                id="accordion"
                className="nav navbar-nav navbar-left no-margin alt-font text-normal"
                data-in="animate__fadeIn"
                data-out="animate__fadeOut"
              >
                {/* start menu item */}
                <li className="dropdown megamenu-fw ">
                  <a href='#' onClick={reload}>Home</a>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#about" onClick={collapseMenu}>About</a>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#manifesto" onClick={collapseMenu}>Our Manifesto</a>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#services" onClick={collapseMenu}>Services</a>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#branches" onClick={collapseMenu}>Our Presence</a>
                </li>
                <li className="dropdown megamenu-fw ">
                  <a href="#contact" onClick={collapseMenu}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
