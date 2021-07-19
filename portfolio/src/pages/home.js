import React from 'react'
import { Section } from './home_style.js';
import { ExpSection } from 'components/Exp/Exp.js';
import { WelcomeSection } from 'components/Welcome/Welcome.js';
import { Fade,Reveal } from 'react-reveal';
export const Home = (props) => {

    const sty = {
        backgroundColor: 'yellow'
    }

    return(
        <div style={{position:'relative',overflow:'hidden'}}>
            <Reveal effect={sty}>
            <Section id="welcome" color={'#EAE7DC'} style={{height: '100vh'}}>
                <WelcomeSection />
                <div style={{alignSelf: 'flex-end',padding: '2rem 3rem'}}>
                    <Fade bottom delay={2000}>
                        <h1 style={{fontSize:'20px'}}>This website is written with React.js</h1>
                    </Fade>
                </div>
            </Section>
            </Reveal>
            <Section id="exp" ref={props.cusref} color={'#565656'}>
              <ExpSection />
            </Section>
            <Section id="skill" color={'#e85a4f'}>
                
            </Section>
            <Section id="contact" color={'red'}>Contact Me</Section>
        </div>
    );
}

export default Home;