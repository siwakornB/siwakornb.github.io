import React,{useEffect, useCallback, useState} from 'react';
import { Carousel,Card,Div,WordCard,Img } from './style.js';
import rammbo_home from 'assets/Rammbo-home.gif';
import rammbo_gp from 'assets/Rammbo.gif';

const cardItems = [
  {
      id: 1,
      title: 'Rammbo',
      description: 'my first game',
      gif: rammbo_home,
  },
  {
      id: 2,
      title: 'Asteriod',
      description: 'my second game',
      gif: rammbo_gp,
  },
  {
    id: 3,
    title: '3',
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

  const handleCallback =  useCallback(() =>{
    let temparr = [...arrlist], tempword = Array(cardItems.length).fill(0);

    if (inx < cardItems.length-1){
      temparr[inx] = 'translateX('+ (1500+inx*500) +'px)';
      setInx(inx + 1);
    }else{
      setInx(0);
      temparr = Array(cardItems.length).fill('translateX(0px)')
    }
    tempword[inx+1] = 100;
    setList(temparr);
    setWord(tempword);
  });

  useEffect(() => {
    const transitionInterval = setInterval(() => {
        handleCallback();
    }, 2000); // The interval value could also be a prop

    return () => clearInterval(transitionInterval);
  }, [inx,arrlist,wordlist]);

  return(
    <Div row>
      <div>
        {cardItems.map((card,index) => (
          <WordCard key={''+card.id+index} show={wordlist[index]}>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </WordCard>
        ))}
      </div>
      <div style={{width: '50vw',height:'50vh',position:'relative'}}>
        {cardItems.map((card, index) => (
          <Img src={card.gif} alt="" key={card.id} zindex={cardItems.length-index} transform={arrlist[index]} />
        ))}
      </div>
    </Div>
  );
}

const CardCarousel = (props) => {


    return (
      <Carousel>
        {cardItems.map((card, index) => (
          <Card
            key={card.id} 
            status={`${props.determineClasses(props.indexes, index)}`}
          >
          <Img src={card.gif} alt="" />
          </Card>
        ))}
      </Carousel>
      );
}
