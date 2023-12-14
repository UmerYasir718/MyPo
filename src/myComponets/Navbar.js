<<<<<<< HEAD
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../App.css';
=======
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import logo from "../Pics/new.png";
>>>>>>> 45e1616 (Initial commit)
export default function Navbar() {
  // const [textColor, setTextColor] = useState({
  //   color: "black",
  // })
  // const [styles, setStyles] = useState({
  //   color: "white",
  //   backgroundColor: "black"
  // })
  // const themeChange = () => {
  //   if (styles.color === "black" && textColor.color === "black") {
  //     setStyles({
  //       color: "white",
  //       backgroundColor: "#282C34",
  //     })
  //     setTextColor({
  //       color: "white",
  //     })
  //     setBtn(< i className="fa-solid fa-sun fs-2" ></i >)
  //   }
  //   else {
  //     setStyles({
  //       color: "black",
  //       backgroundColor: "white",
  //     })
  //     setTextColor({
  //       color: "black",
  //     })
  //     setBtn(<i className="fa-solid fa-moon fs-2"></i>)
  //   }
<<<<<<< HEAD
  // } 
=======
  // }
>>>>>>> 45e1616 (Initial commit)
  // const [btn, setBtn] = useState(
  //   <i className="fa-solid fa-moon fs-2"></i>
  // )
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark Navbar container fixed-top">
        <div className="container-fluid">
<<<<<<< HEAD
          <img src="./Pics/new.png" className="logo" alt="logo" />
          <Link className="navbar-brand fs-2" to="/">Umer Yasir</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
=======
          <img src={logo} className="logo" alt="logo" />
          <Link className="navbar-brand fs-2" to="/">
            Umer Yasir
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
>>>>>>> 45e1616 (Initial commit)
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-auto">
              <li className="nav-item">
<<<<<<< HEAD
                <NavLink className="nav-link fs-5 textColor" aria-current="page" to="/"  >
=======
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/"
                >
>>>>>>> 45e1616 (Initial commit)
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <NavLink className="nav-link fs-5 textColor" aria-current="page" to="/About">
=======
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/About"
                >
>>>>>>> 45e1616 (Initial commit)
                  About
                </NavLink>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <NavLink className="nav-link fs-5 textColor" aria-current="page" to="/MyResume">
=======
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/MyResume"
                >
>>>>>>> 45e1616 (Initial commit)
                  My Resume
                </NavLink>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <NavLink className="nav-link fs-5 textColor" aria-current="page" to="/Portfolio">
=======
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/Portfolio"
                >
>>>>>>> 45e1616 (Initial commit)
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 textColor" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 45e1616 (Initial commit)
}
