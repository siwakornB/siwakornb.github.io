import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/6);
    z-index: 10;
    position: relative;
    top: 0 ; 
`

export const Navlink = styled(NavLink)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        color: #15cdfc;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: orange;
    }
`

export const Bar = styled(FaBars)`
    display: none;
    color: #000;
    
    @media screen and (max-width: 768px){
        display: block;
        position: relative;
        top: 0;
        right: 0;
        transform: translate(-100%,75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
 