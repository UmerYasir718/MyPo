import React, { useState } from 'react';
import Navbar from './Navbar';
import ProgressBar from "@ramonak/react-progress-bar";
import "../App.css"
// import 'react-circular-progressbar/dist/styles.css';
export default function MyResume() {
    const htmlPercentage = 95;
    const cssPercentage = 88;
    const jsPercentage = 85;
    const bootstrapPercentage = 90;
    const reactPercentage = 80;
    const nodePercentage = 75;
    const expressPercentage = 80;
    const mongodbPercentage = 80;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div>
            <Navbar />
            <div className="container textColor my-3">
                {/* <div className="row">
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light fs-3">
                            <i class="fa-brands fa-html5" style={{ color: "#e44d26" }}></i>
                            Html
                        </span>&nbsp;
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light fs-3">
                            <i class="fa-brands fa-css3-alt" style={{ color: "#1572b6" }}></i>
                            CSS
                        </span>&nbsp;
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light fs-3">
                            <i class="fa-brands fa-bootstrap" style={{ color: "#6f2cf5" }}></i>
                            BootStrap
                        </span>&nbsp;
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light fs-3">
                            <i class="fa-brands fa-js" style={{ color: "#F0DB4F" }}></i>
                            JavaScript
                        </span>&nbsp;
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light fs-3">
                            <i class="fa-brands fa-react" style={{ color: "#00D9FF" }}></i>
                            React
                        </span>&nbsp;
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light  fs-3">
                            <i class="fa-brands fa-node" style={{ color: "#14a40a" }}></i>
                            NodeJs
                        </span>&nbsp;
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center mx-auto mb-2">
                        <span class="badge bg-dark text-light  fs-3">
                            <i class="fa-solid fa-leaf" style={{ color: "#00ed64" }}></i>
                            MongoDB
                        </span>&nbsp;
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-8 col-12 col-sm-12 col-md-8 order-1 order-md-1 order-sm-1">
                        <h2 className="Mainheading font-weight-bold">Education</h2><br />
                        {/* <!-- ------------ University of Management and Technology---------- --> */}
                        <div class="row">
                            <div class="col-4">
                                <b class="heading font-weight-bold">2021-2025</b> <br />
                                <span class="textColor font-weight-light">University of Management and Technology</span><br />
                                <img class="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded" width="150" height="150" src="Pics/umt.jpg" alt="" />
                            </div>
                            <div class="col-8 textColor font-weight-light">
                                <span class="heading font-weight-bold ">BS Software Engineering</span><br />
                                The BSc Software Engineering degree at the University of Management and Technology offers a
                                comprehensive curriculum and practical experiences, empowering students to become skilled
                                software engineers in the digital age.
                            </div>
                        </div><br />
                        {/* <!-- ------------Aspire Group of Colleges ---------- --> */}
                        <div className="row">
                            <div className="col-4">
                                <b className="heading font-weight-bold">2019-2021</b> <br />
                                <span className="textColor font-weight-light">Aspire Group of Colleges</span>
                                <img className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded" width="150" height="150" src="Pics/aspire.jpg" alt="" />
                            </div>
                            <div className="col-8 textColor font-weight-light">
                                <span className="heading font-weight-bold"><b> FSc Pre- Engineering</b></span><br />
                                Studying FSc Pre-Engineering at Aspire Group of Colleges lays a strong academic foundation for
                                students pursuing engineering disciplines, with experienced faculty and excellent resources to
                                foster their scientific and technical growth.
                            </div>
                        </div><br />
                        {/* <!-- -- ------------ Deen Public High School---------- --> */}
                        <div className="row">
                            <div className="col-4 ">
                                <b className="heading font-weight-bold">2007-2019</b> <br />
                                <span className="textColor">Deen Public High School</span>
                                <img className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded" width="150" height="150" src="Pics/deen.jpg" alt="" />
                            </div>
                            <div className="col-8 font-weight-light">
                                <span className="heading font-weight-bold"><b>Secondary Education</b></span><br />
                                Studying at Deen Public High School during my secondary education was a transformative journey
                                that nurtured my academic excellence and shaped my character with values-based education.
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-12 col-sm-12 col-md-4 order-2 order-md-2 order-sm-2">
                        <div className="Skills textColor">
                            <h2 className="Mainheading font-weight-bold">Coding Skills</h2>
                            <div className="row">
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-brands fa-html5" style={{ color: "#e44d26" }}></i>
                                        Html
                                        {isHovering && (
                                            <ProgressBar completed={htmlPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-brands fa-css3-alt" style={{ color: "#1572b6" }}></i>
                                        CSS
                                        {isHovering && (
                                            <ProgressBar completed={cssPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-brands fa-bootstrap" style={{ color: "#6f2cf5" }}></i>
                                        BootStrap
                                        {isHovering && (
                                            <ProgressBar completed={bootstrapPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-brands fa-js" style={{ color: "#F0DB4F" }}></i>
                                        JavaScript
                                        {isHovering && (
                                            <ProgressBar completed={jsPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-brands fa-react" style={{ color: "#00D9FF" }}></i>
                                        React
                                        {isHovering && (
                                            <ProgressBar completed={reactPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-brands fa-node" style={{ color: "#14a40a" }}></i>
                                        NodeJs
                                        {isHovering && (
                                            <ProgressBar completed={nodePercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        {/* <i class="fa-brands fa-node" style={{ color: "#14a40a" }}></i> */}
                                        Express
                                        <i class="fa-brands fa-js" style={{ color: "#F0DB4F" }}></i>
                                        {isHovering && (
                                            <ProgressBar completed={expressPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                                <div className="col-12 mb-2 d-flex justify-content-center">
                                    <p class="badge bg-dark text-light fs-3" style={{ width: '100%' }} onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                        <i class="fa-solid fa-leaf mb-2" style={{ color: "#00ed64" }}></i>
                                        MongoDB
                                        {isHovering && (
                                            <ProgressBar completed={mongodbPercentage} maxCompleted={100}
                                                className='mt-2'
                                                bgColor='lime'
                                                labelColor='black' />
                                        )}
                                    </p>
                                </div>
                            </div>
                            {/* <CircularProgressbar value={htmlPercentage} text={`${htmlPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>Html</h3> */}

                            {/* <CircularProgressbar value={cssPercentage} text={`${cssPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>CSS</h3> */}

                            {/* <CircularProgressbar value={jsPercentage} text={`${jsPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>JavaScript</h3> */}

                            {/* <CircularProgressbar value={bootstrapPercentage} text={`${bootstrapPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>BootStrap</h3> */}

                            {/* <CircularProgressbar value={bootstrapPercentage} text={`${bootstrapPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>BootStrap</h3> */}

                            {/* <CircularProgressbar value={bootstrapPercentage} text={`${bootstrapPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>BootStrap</h3> */}


                            {/* <CircularProgressbar value={bootstrapPercentage} text={`${bootstrapPercentage}%`} />
                                <h3 className='textColor d-flex justify-content-center'>BootStrap</h3> */}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
