import React from "react"
import { Button, NavLink } from "reactstrap"

const Home = () => {
    return(
        <div>
            <h1>Welcome,</h1>
            <h4>Lea Hazel</h4>
            <h5>Full Stack Web Developer</h5>
            <div>
                <Button>
                 <NavLink className="nav-text" href="/Projects">Check Out My Projects</NavLink>
                </Button>
            </div>
        </div>
    )
}

export default Home;