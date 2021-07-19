import { Fade } from 'react-reveal';
import styled from 'styled-components';
import mypic from 'assets/cropped.jpg';

const Hero = styled.div`
    width: 100%;
    min-height: 90vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    overflow-y: hidden;

    @media screen and (max-width: 1200px){
        display: grid;
        grid-template-columns: auto;
    }
`
const Welcomeh1 = styled.div`
    padding-top: 100px;
    padding-left: 0px;
    font-size: 80px;

    @media screen and (max-width: 1200px){
        padding-top: 10vh;
        padding-left: 5vw;
        font-size: 50px;
    }
`
const Img = styled.img`
    margin-top: 15vh;
    @media screen and (max-width: 1200px){
        margin-top: 50px;
    }
`

export const WelcomeSection = (props) =>{

    return(
        <Hero style={{backgroundColor: `${props.bgc}`}}>
            <div>
                <Fade bottom>
                    <Welcomeh1>Welcome<br/>To<br/>My Portfolio</Welcomeh1>
                </Fade>
            </div>
            <Fade right delay={1300}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Img src={mypic} style={{width:'40vw',height:'auto',borderRadius: '50%',maxWidth:'350px'}} />
                    <h2>Siwakorn Boonpamee</h2>
                    <h3>Computer Engineering</h3>
                </div>
            </Fade>
        </Hero>
    );
}

//Graduated in 2021, Majoring in Computer field and having strenuously interests in any kind of Embedded System, Web-App Development, also Machine Learning field ,such as Object Classification and Detection. As for my personalities, I considered myself as adaptive, creative, open-minded, tolerant, good interpersonal, and one of the most important is that I am always willing to amend myself.