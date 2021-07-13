import styled from 'styled-components';

export const Section = styled.section`
    margin: 5rem 10vw;
    width: auto;
    height: 100vh;
    background-color: ${props => props.color};
`
export const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row': 'column'};
    ${props => props.color ? `background-color: ${props.color}`: `` };
    flex-wrap: wrap;
    width: 100%;
    height: auto;
`
