import React from "react";
import styled from "styled-components";
import { CardProps } from "../App";
import { Card } from "../components/Card";
import { Dashboard } from "../components/Dashboard";

export interface AreaProps {}

const Container = styled.div`
  padding-top: 2rem;
  display: row;
  
  align-items: center;

  h1{
    margin-left: 2rem;

    text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }
  .Space {
    margin-top: 1.5rem;
  }
`;

export const Area: React.FC<AreaProps> = props => {

  const infos: CardProps[] = [
    {
      title: "Area 1" ,
      description: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
      type: "Area",
      link: "teste.com.br",
    },
    {
      title: "Area 2" ,
      description: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
      type: "Area",
      link: "teste.com.br",
    },
    {
      title: "Area 3" ,
      description: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
      type: "Area",
      link: "teste.com.br",
    }
  ];

  return (
    <>
      <Dashboard >
        <Container>
          <h1>Area</h1>
          {infos.map(info => (
            <div className="Space">
              <Card title={info.title} description={info.description} type={info.type} link={info.link} />
            </div>
          ))}
        </Container>
      </ Dashboard>
    </>
  )
}