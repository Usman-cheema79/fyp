import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import './HeroSection.css'
const HeroSection = () => {
  const [screensize, setScreensize] = useState(window.innerWidth);
  const comparison = 900;

  useEffect(() => {
    const handleResize = () => {
      setScreensize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount


  const sliderItems = [
    {
      //   image: "https://placehold.it/1200x400",
      image:
        "https://images.unsplash.com/photo-1554517222-e8b264ce5a35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "First Slide Title",
      text: "Some text related to the first slide.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530736563750-5705fa77c26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDEyMDAlMjB4JTIwNDAwfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Second Slide Title",
      text: "Some text related to the second slide.",
    },
    {
      image:
        "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Third Slide Title",
      text: "Some text related to the second slide.",
    },
    {
      image:
        "https://images.pexels.com/photos/8355599/pexels-photo-8355599.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fourth Slide Title",
      text: "Some text related to the second slide.",
    },
  ];
  return (
    <div className="container-fluid ">
      <div className="row" id="hero-section">
        <div className="col-md-3">
          <div className="categories-sidebar">
            {screensize >= comparison ? (
              <Categories />
            ) : (
              <>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#staticBackdrop"
                  aria-controls="staticBackdrop"
                >
                  Categories
                </button>

                <div
                  class="offcanvas offcanvas-start"
                  data-bs-backdrop="static"
                  tabindex="-1"
                  id="staticBackdrop"
                  aria-labelledby="staticBackdropLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">
                      {/* Offcanvas */}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <div>
                      {/* I will not close if you click outside of me. */}
                      <Categories />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Carousel */}
        {/* <div className="col-md-9">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
        <div className="col-md-9">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
