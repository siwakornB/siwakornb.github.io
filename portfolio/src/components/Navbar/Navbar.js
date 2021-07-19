import React from 'react'
import { Nav,Navlink,NavMenu,Bar } from './NavbarElements.js'
//import { executeScroll } from '../../pages/home.js'

const Navbar = (props) => {

    return (
        <div style={{position:'absolute',width:'100%'}}>
            <Nav style={{backgroundColor: `${props.bgc}`}}>
                <Navlink to='/' style={{color: `${props.color}`}}>
                    <h1>Portfolio</h1>
                </Navlink>
                <Bar />
                <NavMenu>
                    <Navlink to='/exp' style={{color: `${props.color}`}}>
                        My Experience
                    </Navlink>
                    <Navlink to='/skill' style={{color: `${props.color}`}}>
                        Skill&Abilities
                    </Navlink>
                    <Navlink to='/aboutme' style={{color: `${props.color}`}}>
                        About me
                    </Navlink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;
