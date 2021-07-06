import React,{useEffect, useCallback, useState} from 'react'
import { Section } from './home_style.js';
import rammbo_home from '../assets/Rammbo-home.gif';
import rammbo_gp from '../assets/Rammbo.gif';
//var rammbo_gif = require('../assets/Rammbo-home.gif');

const test = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
        items.push(<h1>{i}</h1>);
    }
}


export const Home = (props) => {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

    return(
        <div>
            <Section id="welcome" >Welcome</Section>
            <Section id="exp" ref={props.cusref}>
                <div className="quote">
                    <h1>this is gonna be where the quode is</h1>
                </div>
                <div className="portrait">
                    <div className="ramboo">
                        <img src={rammbo_home} alt=""/>
                    </div>
                    <div className="Asteroid">
                    <img src={rammbo_gp} alt=""/>
                    </div>
                </div>
            </Section>
            <Section id="skill">SkillnAbilities</Section>
            <Section id="aboutme">Aboutme+Education</Section>
        </div>
    );
}

export default Home;