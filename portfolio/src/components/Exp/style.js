import styled from 'styled-components';
export const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row': 'column'};
    ${props => props.color ? `background-color: ${props.color}`: `` };
    width: auto;
    height: auto;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 1200px){ 
        display: grid;
        grid:
        'wordcard'
        'carou';
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
    grid-area: wordcard;
    display: flex;
    flex-direction: column;
    transition: all 1s ease-in-out;
    transform: translateY(20%);
    width: 40vw;
    flex: 1;
    position: absolute;
    opacity: ${props => props.show};

    @media screen and (max-width: 1200px){
        width: 5vw;
        margin-bottom: 5rem;
    }
`

export const Img = styled.img`
    position: absolute;
    border-radius: 8px;
    width: calc(10rem + 55vmin);
    max-width: 960px;
    transition: all 2s ease-in-out;
    z-index: ${props => props.zindex};
    transform: ${props => props.transform};
    box-shadow: 2px 5px 27px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 400px){
        width: 20rem;
    }
`