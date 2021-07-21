import React,{useEffect, useCallback, useState} from 'react';
import styled from 'styled-components';
import { Div,WordCard,Img,Container,Children,Arrow,Arrow2Ways} from './style.js';
import {cardItems,webcardItems,objectcardItems} from './carditems.js';
import { Fade,Slide } from 'react-reveal';
import makeCarousel from 'react-reveal/makeCarousel';
import { FiArrowDownCircle } from 'react-icons/fi';


export const ExpSection = (props) => {
  const [inx,setInx] = useState(0);
  const [arrlist,setList] = useState(Array(cardItems.length).fill('translateX(0px)'));
  const [wordlist,setWord] = useState([100].concat(Array(cardItems.length).fill(0)));

  const handleCallback = useCallback(() =>{
    let temparr = [...arrlist], tempword = Array(cardItems.length).fill(0);

    if (inx < cardItems.length-1){
      temparr[inx] = 'translateX('+ (1500+inx*500) +'px)';
      tempword[inx+1] = 100;
      setInx(inx + 1);
    }else{
      setInx(0);
      temparr = Array(cardItems.length).fill('translateX(0px)')
      tempword = [100].concat(Array(cardItems.length).fill(0));
    }
    setList(temparr);
    setWord(tempword);
  });

  useEffect(() => {
    /*const transitionInterval = setInterval(() => {
        handleCallback();
    }, 2000); // The interval value could also be a prop

    return () => clearInterval(transitionInterval);*/
  }, [inx,arrlist,wordlist,handleCallback]);
  
  
  return(
    <div style={{width:'100%',minHeight:'100vh',backgroundColor: `${props.bgc}`}}>
      <Phase />
      <Game />
      <Website />
      <Objectdetection/>
    </div>
  );
}
const CarouselUI = ({ position, total, handleClick, children }) => {
  return(
  <Container>
    <Arrow2Ways />
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
  </Container>
)}

const Carousel = makeCarousel(CarouselUI);
//<Img src={card.gif} alt="" key={card.id} zindex={cardItems.length-index} transform={arrlist[index]} /

/*<div style={{width: '50vw',height:'40vh'}}>
          {cardItems.map((card,index) => (
            <WordCard key={''+card.id+index} show={wordlist[index]}>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </WordCard>
          ))}
        </div>*/
  

const StyledPhase = styled.div`
  text-align: center;
  padding: 22vh 0px 0px;
  font-size: 80px;
  color: #17252a;
  overflow: hidden;

  @media screen and (max-width: 1200px){
    padding: 18vh 15vw 0vh;
    font-size: 50px;
  }

  @media screen and (max-width: 768px){
    padding: 20vh 15vw 0vh;
    font-size: 40px;
  }
`
const Desphase = styled(StyledPhase)`
  text-align: center;
  padding: 10vh 0vw 0px;
  font-size: 25px;
  color: #feffff;

  @media screen and (max-width: 1200px){
    padding: 15vh 15vw 10vh;
  }
`
const Phase = () => {
  
  return(
    <div style={{minHeight: '100vh',width: '100%',backgroundColor:'#3aafa9'}}>
      <Fade bottom duration={2000}>
        <StyledPhase>Experience</StyledPhase>
        <div style={{backgroundColor:'#2b7a78',height: '5px',width:'40vmin',margin:'10px auto'}} />
        <Desphase>This section introduce what I've done so far since the university</Desphase>
        <div style={{fontSize: '80px',color:'#17252a',position:'absolute',left:'50%',bottom:'0'}}>
          <FiArrowDownCircle style={{position:'relative',left:'-50%'}} />
        </div>
      </Fade>
    </div>
  );
}

const Game = () => {
  return(
    <Div row style={{backgroundColor:'#003049',paddingTop:'5vh'}}>
      <div style={{color: '#fff'}}>
        <h1 style={{padding: '0 5vw 0'}}>Games</h1>
        <h3 style={{padding: '0 5vw 0',maxWidth:'70vw'}}>Two 2D shooting game, first, "Rambo", was developed in C++ using SFML library, which was written in Object Oriented methodology, fighting with logical bot.
        Another one is "Asteroid", similar to other Asteroids game, was developed in Java using JavaFX library as GUI.</h3>
      </div>
      <div style={{width: '100%',height:'60vh',textAlign: 'center',paddingTop:'5vmin'}}>
        <Carousel maxTurns={0} >
          {cardItems.map((card, index) => (
          <Slide right>
            <div>
              <Img src={card.gif} alt="" key={card.id} />
            </div>
          <Fade >
            <WordCard>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </WordCard>
          </Fade>
          </Slide>
          ))}
        </Carousel>
      </div>
    </Div>
  )
}

const Website = () =>{
  return(
    <div style={{backgroundColor:'#FCBF49',paddingTop:'5vh'}}>
      <div style={{color: '#000'}}>
        <h1 style={{padding: '0 5vw 0'}}>Website Development</h1>
        <h3 style={{padding: '0 5vw 0',maxWidth:'70vw'}}>My first fully functional website with a friend.During my internship, I got an assignment to develop a Web-Application about Package Management website for my faculty
        —Engineering faculty— ,using Laravel framework and MySQL database, deployed on a
        Windows Server via github and Microsoft IIS.I was respondsible for the whole the backend with a little bit of frontend.</h3>
      </div>
      <div style={{width: '100%',height:'60vh',textAlign: 'center',paddingTop:'5vmin'}}>
        <Carousel maxTurns={0} >
          {webcardItems.map((card, index) => (
          <Slide right>
            <div>
              <Img src={card.gif} alt="" key={card.id} style={{width:'calc(10rem + 65vmin)'}} />
            </div>
          <Fade >
            <WordCard style={{color: '#000',whiteSpace:'pre-wrap'}}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </WordCard>
          </Fade>
          </Slide>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

const Objectdetection = () =>{
  return(
    <div style={{backgroundColor:'#EAE2B7',paddingTop:'5vh'}}>
      <div style={{color: '#000'}}>
        <h1 style={{padding: '0 5vw 0'}}>Individual and Object Detection on CCTV records</h1>
        <h3 style={{padding: '0 5vw 0',maxWidth:'70vw'}}>In order to pursue the suspect from a numerous CCTV records, we have developed
        a program script base on power of YOLOv4 algorithm to help the authorities
        pursue the individual of interest with less time consumption and resources with
        individuals’properties such as shirt, bag, backpack, and colour.
        </h3>
      </div>
      <div style={{width: '100%',height:'60vh',textAlign:'center',paddingTop:'5vmin'}}>
        <Carousel maxTurns={0} >
          {objectcardItems.map((card, index) => (
          <Slide right>
            <div>
              <Img src={card.gif} alt="" key={card.id} />
            </div>
          <Fade >
            <WordCard style={{color: '#000'}}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </WordCard>
          </Fade>
          </Slide>
          ))}
        </Carousel>
      </div>
    </div>
  )
}