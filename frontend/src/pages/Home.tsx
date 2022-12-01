/* eslint-disable react/style-prop-object */
import React from "react";
import styled from 'styled-components';
import character from '../assets/Capa-Marca2.svg';

const Container = styled.a`
  background-image: url(${character});
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;

  display: flex;
  justify-content: center;

  img {
    height: 30rem;
  }
`

export interface HomeProps {}


export const Home: React.FC<HomeProps> = (props) => {

  return (
    <Container href="area">
    </Container>
  )
}