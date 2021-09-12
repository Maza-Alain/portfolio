import React from 'react';
import styled from 'styled-components';
import back from '../img/background.jpg';

const Container = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow:hidden;
`;
const Img = styled.img`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index:2;
    animation: zoom 25s ease-in infinite;
    @keyframes zoom {
    0%{
        transform: scale(100%);
    }
    75%{
        transform: scale(140%);
    }
    100%{
        transform: scale(100%);
    }
    }
`;
const Circle = styled.div`
    position: absolute;
    width: 32rem;
    height: 32rem;
    border-radius: 100%;
    z-index:3;
    inset: 0;
    margin: auto;
    background: radial-gradient(50% 50% at 50% 50%, #11BFCA 0%, rgba(108, 213, 220, 0.94875) 85.94%, rgba(157, 234, 239, 0.88) 100%);
    box-shadow: 15px -8px 99px 56px rgba(37, 134, 128, 0.48);
    border-top: 32px double #229698; 
    border-right: 32px double #229698; 
    animation: rote 10s ease-in infinite;
    @keyframes rote {
    0%{
        /* transform: scale(100%); */
        transform: rotate(0deg);
    }
    75%{
        /* transform: scale(130%); */
    }
    100%{
        /* transform: scale(100%); */
        transform: rotate(360deg);
    }
    }
    
    @media(max-width: 768px ){
        animation: rote 15s ease-in infinite;
        width: 28rem;
        height: 28rem;
    }
    @media(max-width: 425px ){
        width: 19rem;
        height: 19rem;
    }
`;
const Title = styled.h1`
    font-size: 7.5rem;
    inset: 0;
    top: 40%;
    position: absolute;
    vertical-align: auto;
    text-align: center;
    z-index:4;
    color: #fff;
    font-weight: 700;
    animation: start 1.5s ease-in;
    text-shadow: 0.025em 0.05em 0 rgba( 28, 93, 129, 0.75);
    @keyframes start {
    from{
        
        opacity: 0%;
    } 
    to{
      
        opacity: 100%;
    }  
    }
    @media(max-width: 768px ){
        font-size: 6.6rem;
        
    }
    @media(max-width: 425px ){
        font-size: 5.4rem;
    }
`;

const Header = () => {
    return (
        <Container>
            <Title>MAZA ALAIN</Title>
            <Circle></Circle>
            <Img src={back} />
        </Container>
    );
}
 
export default Header;