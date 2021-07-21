import styled,{keyframes,css} from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { ImArrowUp2 } from 'react-icons/im';
import { CgArrowsHAlt } from 'react-icons/cg';
const anifadeleft = keyframes`${fadeInLeft}`

export const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row': 'column'};
    ${props => props.color ? `background-color: ${props.color}`: `` };
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: flex-start;
    animation: ${anifadeleft};
    @media screen and (max-width: 1200px){
      flex-direction: ${props => props.row ? 'column': 'row'};
    }
`
export const Carousel = styled.ul`
    grid-area: carou;
    list-style: none;
    height: auto;
    width: 100%;
    margin-right: 0px;
    margin-top: 1vh;
    flex: 1;
`

export const Card = styled.li`
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eeeeee;
    padding: 0px;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    width: auto;
    height: auto;
    transition: all 0.75s ease;
    opacity: 0;
    transform: scale(0.85) translateY(0%);
    position: absolute;

    ${props => (props.status === 'active' && `
        opacity: 1;
        transform: scale(1) translateY(0);
        box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2);
        z-index: 1;
    `) || (props.status === 'next' && `opacity: 1;z-index: -1;`) || 
    (props.status === 'prev' && `
        transform: scale(1.0) translateY(px);
        z-index: 2;
        opacity: 0;
        visibility: hidden;
    `)
    }
`

export const WordCard = styled.div`
    color: #fff;
    padding-left: 0px;
    padding-top: 0px;
    transition: all 1s ease-in-out;
    transform: translateY(0%);
    width: 85%;
    text-align: left;
    font-size: 20px;
    margin: 0 auto;

    @media screen and (max-width: 1200px){
        width: 80%;
        margin-bottom: 2rem;
        padding-top: 20px;
        font-size: 15px;
    }
    @media screen and (max-width: 768px){
        width: 80%;
        margin-bottom: 2rem;
        padding-top: 10px;
        font-size: 15px;
    }
`

export const Img = styled.img`
    
    border-radius: 3px;
    width: calc(10rem + 45vmin);
    height: auto;
    max-width: 1000px;
    max-height: 550px;
    transition: all 1s ease-in-out;
    z-index: ${props => props.zindex};
    transform: ${props => props.transform};
    object-fit: cover;

    @media screen and (max-width: 768px){
      width: calc(10rem + 45vmin);
      height: auto;
      max-height: 330px;
      max-width: 450px;
    }
    @media screen and (max-width: 426px){
      width: 20rem;
      height: auto;
      max-height: 300px;
      max-width: 370px;
    }
`

const width2 = 'calc(10rem + 55vmin)',width = '100%', height='60vh';
export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
export const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
export const Arrow = styled(ImArrowUp2)`
  text-shadow: 1px 1px 1px #fff;
  color: #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 30%;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
  ${props => props.right ? css`transform: rotate(90deg);` : css`transform: rotate(-90deg);`}

  @media screen and (max-width: 800px){
    display: none;
 }
`
export const Arrow2Ways = styled(CgArrowsHAlt)`
    text-shadow: 1px 1px 1px #fff;
    color: #fff;
    z-index: 100;
    line-height: ${height};
    text-align: center;
    top: 30%;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;

  @media screen and (min-width: 800px){
    display: none;
 }
`

export const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`
export const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`