import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Navbar from './Navbar';
export default function About() {
    return (
        <div>
            <Navbar />
            <div className="">
                {/* <!-- -----intro----- --> */}
                <div className="container mx-auto my-3">
                    <h1 className="text-warning">About Me</h1>
                    <div className="row featurette my-3">
                        <div className="col-md-6">
                            <h5 className="textColor">I am a Student of BSc Software Engineering.I am Expert in desgin Web Pages
                                with Outstanding Graphic, Color, and decent
                                interface. Work Experience with two international company and currently work as Freelance.
                                Ability to do work in less time
                                with more accuracy.</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="text-warning font-weight-bold">Age<span className="textColor"> ➤ 19</span></div>&nbsp;
                            <div className="text-warning font-weight-bold">Residence<span className="textColor"> ➤ Pakistan</span></div>
                            &nbsp;
                            <div className="text-warning font-weight-bold">Address<span className="textColor"> ➤ Bhai Pheru, Phool Nagar,
                                Lahore,
                                Pakistan</span></div>&nbsp;
                            <div className="text-warning font-weight-bold">E-mail<span className="textColor"> ➤ umer718@gmail.com</span>
                            </div>&nbsp;
                            <div className="text-warning font-weight-bold">Phone<span className="textColor"> ➤ +92 3314911420</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- -------What I Do--- --> */}
                <div className="container mx-auto ">
                    <div className="h3 textColor">What<span className="text-warning"> I Do</span></div>
                    <div className="row featurette my-3">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 text-light   mb-2">
                                    <div className="box AboutBox text-center"><br />
                                        <h2><i className="fa-sharp fa-solid fa-ribbon" style={{ color: "#FFC107" }}></i></h2>
                                        <p className="text-light font-weight-bold">Experience</p>
                                        <p className="text-light">1 Year working</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-light   mb-2">
                                    <div className="box AboutBox text-center "><br />
                                        <h2><i className="fa-solid fa-briefcase" style={{ color: "#FFC107" }}></i></h2>
                                        <p className="text-light font-weight-bold">Completed</p>
                                        <p className="text-light">10+ Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-light  mb-2">
                                    <div className="box AboutBox text-center"><br />
                                        <h2><i className="fa-solid fa-envelope" style={{ color: "#FFC107" }}></i></h2>
                                        <p className="text-light font-weight-bold">E-mail</p>
                                        <p className="text-light">umeryasir718@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-light  mb-2">
                                    <div className="box AboutBox text-center"><br />
                                        <h2><i className="fa-solid fa-headset" style={{ color: "#FFC107" }}></i></h2>
                                        <p className="text-light font-weight-bold">Support</p>
                                        <p className="text-light">Online 24/7</p>
                                    </div>
                                </div>
                            </div><br />
                            <div className="col-md-12 conbtn">
                                <button type="button" className="btn btn-warning btn-lg ">
                                    <Link className="text-light" to="Contact.html">Contact Me</Link>
                                </button>
                            </div><br />
                        </div>
                        <div className="col-md-6 pic">
                            <img className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded" width="400" height="200" src="Pics/Aboutpg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
