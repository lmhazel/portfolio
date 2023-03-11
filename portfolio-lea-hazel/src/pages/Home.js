import React from "react";
import { Button, NavLink } from "reactstrap";

const Home = () => {
  return (
    <>
      <div className="homepage-background">
        <div className="header">
            <div className="left-side-header">
            Lea Hazel
            </div>
            <div onClick="#about" className="right-side-header">
                <link className="about-header">
                    About
                </link>
                <div className="projects-header">
                    Projects
                </div>
                <div className="contact-header">
                    Contact
                </div>
            </div>
        </div>
        <h3 className="header1">Welcome, my name is</h3>
        <h1 className="header2">Lea Hazel</h1>

        <div className="homepageSpacing">
          <div className="homepage-spacing">
            <Button className="resumeButton">
              <NavLink>
                RESUME
              </NavLink>
            </Button>
            <h5 className="header3">full-stack web developer</h5>
          </div>
        </div>
      </div>

      <div className="aboutme-background">
        <div className="aboutme-styling">
            <div>
                <h3 className="aboutMe">About Me</h3>
                <p1 className="aboutMePara">
                    <span>
                        My name is Lea (LEE-uh) and I’m a full stack web developer with
                        experience in JavaScript, HTML, CSS, Ruby, SQL, Python, R, React,
                        and Ruby on Rails.
                    </span>

                    <span className="second-line">
                        After obtaining my Bachelor’s in Sociology from the University of
                        California, Berkeley, I found a passion for the integration of
                        technology in society and want to foster a diverse and inclusive
                        space in the tech industry.
                    </span>

                    <span className="second-line">
                        I spend my free time listening to new music, playing badminton, and
                        watching cute videos of cats and dogs.
                    </span>
                </p1>
            </div>
            <img className="cursor-image"></img>
        </div>
      </div>

      <div className="project-background">
        <h3 className="project-title">Projects</h3>
        <div>
          <hr className="h_line"></hr>
        </div>
      </div>

      <div className="contact-background">
        <h3 className="contact-title">Want to say hi?</h3>
      </div>
    </>
  );
};

export default Home;
