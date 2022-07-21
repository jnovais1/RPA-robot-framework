/* eslint-disable react/style-prop-object */
import React from "react";
import styled from 'styled-components';
import character from '../assets/Marca2-02.png';

const Container = styled.a`
  background-image: linear-gradient(to right, var(--dark-green), var(--light-green));
  height: 100vh;

  display: flex;
  justify-content: center;
  
  img {
    height: 30rem;
  }
`

export interface HomeProps {}


export const Home: React.FC<HomeProps> = (props) => {

  return (
    <Container href="/area">
      <img src={character} alt="character" />
    </Container>
  )
}