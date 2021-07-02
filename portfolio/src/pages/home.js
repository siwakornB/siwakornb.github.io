import React from 'react'
import { Section } from './home_style.js';

const items = [];

for (let i = 0; i < 20; i++) {
    items.push(<h1>{i}</h1>);
}

export const home = () => {

    return ( 
        <div>
            <Section id="welcome" >Welcome</Section>
            <Section id="exp">
                <h1>Rammbo</h1>
                <h1>Asteroid</h1>
                <h1>Rammbo</h1>
            </Section>
            <Section id="skill">SkillnAbilities</Section>
            <Section id="aboutme">Aboutme+Education</Section>
        </div>
    );
};

export default home;
