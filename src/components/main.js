import Script from "next/script";
import React, { useEffect, useRef } from "react";
import HeadComponent from "./head";

const Slider = () => {
  const sliderRef = useRef(null);

  // Function to move items to the right (next)
  const moveNext = () => {
    const slider = sliderRef.current;
    if (slider) {
      const items = slider.querySelectorAll(".item");
      if (items.length > 0) {
        slider.appendChild(items[0]); // Move the first item to the end
      }
    }
  };

  // Function to move items to the left (previous)
  const movePrev = () => {
    const slider = sliderRef.current;
    if (slider) {
      const items = slider.querySelectorAll(".item");
      if (items.length > 0) {
        slider.prepend(items[items.length - 1]); // Move the last item to the start
      }
    }
  };

  // Attach event listeners for navigation buttons
  const handleNavigation = (e) => {
    const slider = sliderRef.current;
    if (slider) {
      if (e.target.classList.contains("next")) {
        moveNext();
      } else if (e.target.classList.contains("prev")) {
        movePrev();
      }
    }
  };

  // Auto-scrolling functionality
  useEffect(() => {
    const interval = setInterval(moveNext, 6000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const IoniconsLoader = () => {
    useEffect(() => {
      const scriptModule = document.createElement("script");
      scriptModule.type = "module";
      scriptModule.src =
        "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
      document.body.appendChild(scriptModule);

      const scriptNoModule = document.createElement("script");
      scriptNoModule.nomodule = true;
      scriptNoModule.src =
        "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
      document.body.appendChild(scriptNoModule);

      return () => {
        // Clean up scripts when component is unmounted
        document.body.removeChild(scriptModule);
        document.body.removeChild(scriptNoModule);
      };
    }, []);

    return null; // This component does not render anything
  };

  return (
    <><HeadComponent /><div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <div className="main">
              <ul className="slider" ref={sliderRef}>
                  <li
                      className="item"
                      style={{ backgroundImage: 'url("IMG-20241128-WA0034.jpg")' }}
                  >
                      <div className="content">
                          <h2 className="title">Software Engineering</h2>
                          <p className="description">
                              Master the art of building innovative applications, solving
                              complex problems, and driving technological transformation.
                          </p>
                          <button>Read More</button>
                      </div>
                  </li>
                  <li
                      className="item"
                      style={{
                          backgroundImage: 'url("7daeb0fd-554b-4cf2-b57c-d75dd5b65261.jpg")',
                      }}
                  >
                      <div className="content">
                          <h2 className="title">Honey Treat Academy</h2>
                          <p className="description">
                              Honey Treat Academy is a hub for creativity and innovation,
                              empowering students with cutting-edge skills in technology,
                              business, and the arts. Our mission is to inspire growth, foster
                              talent, and prepare learners for success in a rapidly evolving
                              world.
                          </p>
                          <button>Read More</button>
                      </div>
                  </li>
                  <li
                      className="item"
                      style={{ backgroundImage: 'url("IMG_5784.jpg")' }}
                  >
                      <div className="content">
                          <h2 className="title">Data Analysis</h2>
                          <p className="description">
                              Uncover insights from data to drive decisions, optimize
                              processes, and unlock new opportunities.
                          </p>
                          <button>Read More</button>
                      </div>
                  </li>
                  <li
                      className="item"
                      style={{ backgroundImage: 'url("IMG_5953.jpg")' }}
                  >
                      <div className="content">
                          <h2 className="title">Digital Marketing</h2>
                          <p className="description">
                              Learn to create impactful online strategies, engage audiences,
                              and elevate brand presence in the digital world.
                          </p>
                          <button>Read More</button>
                      </div>
                  </li>
                  <li
                      className="item"
                      style={{
                          backgroundImage: 'url("7daeb0fd-554b-4cf2-b57c-d75dd5b65261.jpg")',
                      }}
                  >
                      <div className="content">
                          <h2 className="title">Photography</h2>
                          <p className="description">
                              Explore the world of visual storytelling through creative
                              techniques and professional-grade photography skills.
                          </p>
                          <button>Read More</button>
                      </div>
                  </li>
              </ul>
              <IoniconsLoader />
              <nav className="nav">
                  <ion-icon
                      className="btn prev"
                      name="arrow-back-outline"
                      onClick={(e) => handleNavigation(e)}
                  ></ion-icon>
                  <ion-icon
                      className="btn next"
                      name="arrow-forward-outline"
                      onClick={(e) => handleNavigation(e)}
                  ></ion-icon>
              </nav>
          </div>
      </div></>
  );
};

export default Slider;
