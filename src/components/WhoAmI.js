import React, { forwardRef} from 'react';
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    background-color: #1F3B3D;
    flex-direction: column;
    
`;
export const Title = styled.h2`
    margin-top: 1rem;
    font-size: 5rem;
    text-shadow: 0.025em 0.05em 0 rgba( 28, 93, 129, 0.75);
    text-align: center;
    color: #fff;
    @media(max-width: 768px ){
        font-size: 4rem;
    }
    @media(max-width: 425px ){
        font-size: 2.85rem;
    }
`;
export const SubTitle = styled.h3`
    font-size: 3.4rem;
    text-align: center;
    text-shadow: 0.025em 0.05em 0 rgba( 28, 93, 129, 0.75);
    font-weight: 500;
    color: #fff;
    @media(max-width: 768px ){
        font-size: 2.4rem;
    }
    @media(max-width: 425px ){
        font-size: 1.5rem;
    }
    
`;
const Description = styled.p`
    font-size: 2.8rem;
    color: #fff;
    text-align: center;
    margin-top: 7rem;
    padding-left: 3rem;
    padding-right: 3rem;
    opacity: ${props => props.op};
    transition: opacity .5s ease-out;
    @media(max-width: 768px ){
        font-size: 2.4rem;
        
    }
    @media(max-width: 425px ){
        font-size: 1.5rem;
        margin-top: 5.6rem;
    }
`;

const WhoAmI = (props, ref) => {
    const {op} = props;
  
    
    
    return ( 
        <Container >
            <Title ref={ref} >Frontend Developer</Title>
            <SubTitle>Who am I?</SubTitle>
            <Description op={`${op}`}>I’m an autodidactic programer who really loves coding because, in coding, I found a way where I can mix creativity and logic. Also, coding saved me from depression in the darknest stage of my life. So, I'm going to become in one of the best.</Description>
        </Container>
     );
}
 
export default forwardRef(WhoAmI); 