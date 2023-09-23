"use client";
import React from "react";

const Set = (props) => {
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "100px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundText: {
      fontSize: "4rem",
      color: "#d4d4d4",
      position: "absolute",
      fontWeight: "bold",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    frontText: {
      fontSize: "0.8rem" /* 4 times smaller than the background text */,
      color: "#0f0f0f" /* Assuming the background is light gray */,
      position: "absolute",
      fontWeight: "bold",
      top: "12px",
      left: "0",
      right: "0",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.backgroundText}>{props.backText}</h1>
      <p style={styles.frontText}>{props.frontText}</p>
    </div>
  );
};

const InfinitySet = (props) => {
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "100px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundText: {
      fontSize: "7rem",
      color: "#d4d4d4",
      position: "absolute",
      fontWeight: "bold",
      top: "0",
      left: "0",
      right: "0",
      bottom: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    frontText: {
      fontSize: "0.8rem" /* 4 times smaller than the background text */,
      color: "#0f0f0f" /* Assuming the background is light gray */,
      position: "absolute",
      fontWeight: "bold",
      top: "12px",
      left: "0",
      right: "0",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.backgroundText}>{props.backText}</h1>
      <p style={styles.frontText}>{props.frontText}</p>
    </div>
  );
};

export default function Numbers() {
  return (
    <section className="wow animate__fadeIn">
      <h3
        className="alt-font row justify-content-center align-items-center"
        style={{ marginBottom: "100px" }}
      >
        OUR NUMBERS
      </h3>
      <div className="container" style={{fontFamily:'Roboto'}}>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
                <Set backText="18+" frontText="YEARS OF EXPERIENCE" />
              </div>
            </div>
          </div>
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
              <Set backText="1000+" frontText="RETAIL STORE LAUNCHES" />
              </div>
            </div>
          </div>
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
              <Set backText="20+" frontText="STATES CONQUERED" />
              </div>
            </div>
          </div>
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
              <Set backText="100+" frontText="CREW MEMBERS" />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
              <Set backText="300+" frontText="CITIES" />
              </div>
            </div>
          </div>
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
              <Set backText="500+" frontText="B2B & B2C EVENTS" />
              </div>
            </div>
          </div>
          <div className="col md-padding-twelve-left md-margin-60px-bottom sm-margin-40px-bottom sm-padding-15px-left wow animate__fadeInRight">
            <div className="feature-box-5 position-relative">
              {/* <i className="icon-genius text-medium-gray icon-extra-medium top-6" /> */}
              <div className="feature-content">
              <InfinitySet backText="∞" frontText="IDEAS" />
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
