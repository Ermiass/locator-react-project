import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 5px solid red;
    margin-top: 5rem;
    width: 100vw;
    height: 20vh;
`
const Footer = () => {
  return (
    <FooterContainer>
       <h3>
           Developed by Ermias M and Jesus Q
       </h3>
    </FooterContainer>
  )
}

export default Footer;