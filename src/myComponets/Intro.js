import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Picture from "../Pics/best.png";
export default function Intro() {
  // const [text, setText] = useState('');
  // const [index, setIndex] = useState(0);
  const texts = useMemo(
    () => ["A Software Engineer", "As a Full Stack Developer"],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, looping back to 0 if it reaches the end
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      setCurrentText(texts[nextIndex]);
    }, 3000); // Change text every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, texts]);
  // function SlowMotionText() {
  //     const initialText = `I am a Student of BS Software Engineering currently
  // working as a Full Stack Developer. Insha'Allah in the future I will move
  // toward Data Science.`;
  //     useEffect(() => {
  //         const printText = () => {
  //             if (index < initialText.length) {
  //                 setText((prevText) => prevText + initialText.charAt(index));
  //                 setIndex((prevIndex) => prevIndex + 1);
  //             }
  //         };

  //         const interval = setInterval(printText, 20); // Adjust the delay between characters here (e.g., 100ms)

  //         // Clear the interval when the text is fully printed
  //         if (index === initialText.length) {
  //             clearInterval(interval);
  //         }

  //         return () => clearInterval(interval); // Clean up the interval on unmount
  //     }, [initialText]);
  // }
  // SlowMotionText()
  return (
    <div>
      <Navbar />
      <div className="backGroundColor">
        <div className="container">
          <div className="row featurette d-flex  justify-content-center align-items-center mx-auto my-3">
            <div className="col-md-7 ">
              <h2 className="featurette-heading textColor">
                <p>
                  Hello, I'm Umer Yasir
                  <br />
                </p>
                <span className="text-warning">{currentText}</span>
              </h2>
              <p className="lead textColor">
                I am a Student of BS Software Engineering currently working as a
                Full Stack Developer. Insha'Allah in the future I will move
                toward Data Science.
              </p>
              <div className="ref ">
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="https://github.com/UmerYasir718">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="http://www.linkedin.com/in/umer-yasir718">
                    <i
                      className="fa-brands fa-linkedin-in"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="mailto:umer_yasir_718">
                    <i
                      className="fa-solid fa-g"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-outline-warning bg-light"
                >
                  <Link to="https://www.facebook.com/umer.yasir.927?mibextid=ZbWKwL">
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#212529" }}
                    ></i>
                  </Link>
                </button>
                <br />
                <br />
                <div className="d-grid gap-2 d-md-block">
                  <button type="button" className="btn btn-warning ">
                    <Link
                      className="text-dark fw-bold "
                      to="https://github.com/UmerYasir718"
                    >
                      <i
                        className="fa-brands fa-github"
                        style={{ color: "#212529" }}
                      ></i>
                      Visit GitHub
                    </Link>
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-warning ">
                    <Link
                      className="text-dark fw-bold "
                      to="CV/Umer_Yasir_CV.pdf"
                      download="Umer_Yasir_CV.pdf"
                    >
                      <i
                        className="fa-solid fa-download"
                        style={{ color: "#212529" }}
                      ></i>
                      Download Resume
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 my-4 Picture">
              <img
                className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded Picture"
                width="500"
                height="500"
                src={Picture}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
