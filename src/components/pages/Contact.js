import React from "react";

const Contact = () => (
    <div className="">
        <div className="container container-about">
            <h2 className="about-portfolio-contact">Contact</h2>
            <hr />
            <div className="card-body card">
                <div className="card text-center">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <ul>
                            <li className="card-text">Trisha Cole</li>
                            <li className="card-text">Email: tee.cole2@gmail.com</li>
                            <li className="card-text">Phone number: 303-717-5940</li>
                        </ul>
                        <a href="https://github.com/teecole2" target="_blank" className="btn btn-dark btn-contact">GitHub</a>
                        <a href="https://www.linkedin.com/in/trisha-cole-2863b8128/" target="_blank" className="btn btn-primary btn-contact">LinkedIn</a>
                        <a href="https://docs.google.com/document/d/175vprN_WssMLdjB4DDx_HCDMGvQ0_vtIL5yt-PXcgQA/edit?usp=sharing" target="_blank" className="btn btn-danger btn-contact">Resume</a>
                    </div>

                    <div className="card-footer text-muted">
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default Contact;