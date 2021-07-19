import { Fade,Reveal } from 'react-reveal';

export const SkillSection = () => {
    return(
        <div style={{backgroundColor:'#2a9d8f',display:'grid'}}>
            <Fade bottom cascade>
            <h1>Language</h1>
            <ul>
                <li>Thai – Of course, I am a native.</li>
                <li>English – Not as good as native, but considerably good.</li>
                <li>Capable of many Programming Language, for example, Java, C, C++, Python, 
                JavaScript (Node.js with React.js), Assembly, PHP, SQL, VHDL.</li>
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
            </Fade>
        </div>
    )
}