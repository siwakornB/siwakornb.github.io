import React from 'react'
import { Nav,Navlink,NavMenu,Bar } from './NavbarElements.js'

const Navbar = () => {

    const tohome = () => 
        document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });

    const toexp = () => 
        document.getElementById("exp").scrollIntoView({ behavior: "smooth" });

    const toskill = () => 
        document.getElementById("skill").scrollIntoView({ behavior: "smooth" });

    const tome = () => 
        document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });

    return (
        <>
            <Nav>
                <Navlink to='/' onClick={tohome}>
                    <h1>Portfolio</h1>
                </Navlink>
                <Bar />
                <NavMenu>
                    <Navlink to='/' onClick={toexp}>
                        My Experience
                    </Navlink>
                    <Navlink to='/' onClick={toskill}>
                        Skill&Abilities
                    </Navlink>
                    <Navlink to='/' onClick={tome}>
                        Personalities
                    </Navlink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
