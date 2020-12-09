import React from "react";
import image from "./selfie.jpg";
import "./style.css";

const About = () => (
    <div className="background">
        <div className="container container-about">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <img className="selfiejpg" src={image} alt="trisha" width="250" height="250" />
                    <h2 className="name text-center">Trisha Cole</h2>
                    <p className="text-white text-center text-about">Full stack web developer, recently earned a certificate in full stack development from the University of Miami, with newly developed skills in HTML, CSS, Bootstrap, JavaScript, jQuery, APIs, GitHub, Heroku, Materialize, JSON, NodeJS, ExpressJS, MySQL, MongoDb, ReactJS, as well as responsive web design. I am a team player, problem solver, fast learner, organized and creative person, who is looking to bring web designs to life.</p>
                </div>
            </div>
        </div>
    </div>

);

export default About;