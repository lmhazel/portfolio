import React from "react"
import { Button, NavLink } from "reactstrap"

const Home = () => {
    return(
        <div className = "homepageBackground">
            <h3 className="header1">Welcome, my name is</h3>
            <h1 className = "header2">Lea Hazel</h1>
            <h5 className = "header3">Full Stack Web Developer</h5>

            <div>
                <Button>
                 <NavLink className="nav-text" href="/Projects">RESUME</NavLink>
                </Button>
            </div>
            
            <h3>About Me</h3> 
            <p1>
                My name is Lea (LEE-uh) and I’m a full stack web developer with experience in JavaScript, HTML, CSS, Ruby, SQL, Python, R, React, and Ruby on Rails. 

                After obtaining my Bachelor’s in Sociology from the University of California, Berkeley, I found a passion for the integration of technology in society and want to foster a diverse and inclusive space in the tech industry. 

                I spend my free time listening to new music, playing badminton, and watching cute videos of cats and dogs. 
            </p1>

            <h3>Projects</h3>

            <h3>Contact</h3>

        </div>
    )
}

export default Home;