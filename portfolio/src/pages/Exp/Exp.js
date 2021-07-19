import React,{useEffect, useCallback, useState} from 'react';
import styled from 'styled-components';
import { Div,WordCard,Img,Container,Children,Arrow,Arrow2Ways} from './style.js';
import rammbo_home from 'assets/Rammbo-home.gif';
import rammbo_gp from 'assets/Rammbo.gif';
import { Fade,Slide } from 'react-reveal';
import makeCarousel from 'react-reveal/makeCarousel';
import { FiArrowDownCircle } from 'react-icons/fi';

const cardItems = [
  {
      id: 1,
      title: 'Rammbo',
      description: 'My really first game of my life,since i was freshmen',
      gif: rammbo_home,
  },
  {
      id: 2,
      title: 'Features',
      description: 'this game is all about',
      gif: rammbo_gp,
  },
  {
    id: 3,
    title: 'Asteriod',
    description: 'my  game',
    gif: rammbo_gp,
  },
  {
    id: 4,
    title: '4',
    description: 'my  game',
    gif: rammbo_gp,
  },
];

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
  color: #fff;
  text-align: center;
  padding: 22vh 0px 0px;
  font-size: 80px;

  @media screen and (max-width: 1200px){
    padding: 10vh 15vw 0vh;
    font-size: 50px;
  }
`
const Desphase = styled(StyledPhase)`
  text-align: center;
  padding: 10vh 0vw 0px;
  font-size: 20px;

  @media screen and (max-width: 1200px){
    padding: 2vh 15vw 10vh;
  }
`
const Phase = () => {
  
  return(
    <div style={{minHeight: '100vh',width: '100%',backgroundColor:'#d8b26e'}}>
      <Fade bottom duration={2000}>
        <StyledPhase>Experience</StyledPhase>
        <Desphase>This section introduce what I've done so far since the university</Desphase>
        <div style={{fontSize: '80px',color:'white',position:'absolute',left:'50%',bottom:'0'}}>
          <FiArrowDownCircle style={{position:'relative',left:'-50%'}} />
        </div>
      </Fade>
    </div>
  );
}

const Game = () => {
  return(
    <Div row style={{backgroundColor:'#a4998c',paddingTop:'10vh'}}>
      <div>
        <h1 style={{padding: '0 5vw 0'}}>Games</h1>
        <h2 style={{padding: '0 5vw 0',maxWidth:'70vw'}}>Two 2D shooting game, first, "Rambo", was developed in C++ using SFML library, which was written in Object Oriented methodology, fighting with logical bot.
        Another one is "Asteroid", similar to other Asteroids game, was developed in Java using JavaFX library as GUI.</h2>
      </div>
      <div style={{width: '100%',height:'50vh',position:'relative',textAlign: 'center'}}>
        <Carousel maxTurns={0} >
          {cardItems.map((card, index) => (
          <Slide right>
            <div>
              <Img src={card.gif} alt="" key={card.id} />
            </div>
          <Fade >
            <WordCard>
              <h1>{card.title}</h1>
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

const Objectdetection = () =>{
  return(
    <div>

    </div>
  )
}