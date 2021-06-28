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
            <Section id="exp">Experience</Section>
            <Section id="skill">SkillnAbilities</Section>
            <Section id="aboutme">Aboutme+Education</Section>
        </div>
    );
};

export default home;
