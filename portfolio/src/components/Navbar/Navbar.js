import React from 'react'
import { Nav,Navlink,NavMenu,Bar } from './NavbarElements.js'

const Navbar = () => {
    return (
        <>
            <Nav>
                <Navlink to='/github'>
                    <h1>Logo's here</h1>
                </Navlink>
                <Bar />
                <NavMenu>
                    <Navlink to='/exp'>
                        My Experience
                    </Navlink>
                    <Navlink to='/skill'>
                        Skill&Abilities
                    </Navlink>
                    <Navlink to='/persona'>
                        Personalities
                    </Navlink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
