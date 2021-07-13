import React from 'react'
import { Section } from './home_style.js';

import { ExpSection } from 'components/Exp/Carousel.js';

export const Home = (props) => {
    

    return(
        <div  style={{position:'relative',overflow:'hidden'}}>
            <Section id="welcome" color={'yellow'}>Graduated in 2021, Majoring in Computer field and having strenuously interests in any kind of Embedded System, Web-App Development, also Machine Learning field ,such as Object Classification and Detection. As for my personalities, I considered myself as adaptive, creative, open-minded, tolerant, good interpersonal, and one of the most important is that I am always willing to amend myself.</Section>
            <Section id="exp" ref={props.cusref}>
              <ExpSection />
            </Section>
            <Section id="skill" color={'green'}>
                <h1>Language</h1>
                <ul>
                    <li>Thai – Of course, I am a native.</li>
                    <li>English – Not as good as native, but considerably good.</li>
                    <li>Capable of many Programming Language, for example, Java, C, C++, Python, 
                    JavaScript (Node.js with React.js), Assembly, PHP,SQL.</li>
                    <li>HTML and CSS</li>
                </ul>
                <h1>Frameworks</h1>
                <ul>
                    <li>Some exp of Django.</li>
                    <li>Laravel</li>
                    <li>Darknet and of Tensorflow</li>
                    <li>All the well-known Microsoft office suite programs.</li>
                </ul>
                <h1>Others</h1>
                <ul>
                    <li>Linux ,Raspbian</li>
                    <li>Jupyter notebook</li>
                    <li>Understanding of fundamental Network.</li>
                    <li>IOS for Cisco devices.</li>
                    <li>NumPy, Pandas, Pillow, OpenCV2, Matplotlib.</li>
                    <li>Amateur with ROS (Robotic Operation System).</li>
                    <li>YOLOv4 </li>
                    <li>Adobe XD, Photoshop, Editing with Adobe Premiere Pro.</li>
                    <li>Figma for UX/UI design.</li>
                </ul>
            </Section>
            <Section id="contact" color={'red'}>Contact Me</Section>
        </div>
    );
}

export default Home;