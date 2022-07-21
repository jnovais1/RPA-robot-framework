import React from "react";
import styled from "styled-components";
import { CardProps } from "../App";
import { Card } from "../components/Card";
import { Dashboard } from "../components/Dashboard";

export interface FormsProps {}

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

export const Forms: React.FC<FormsProps> = props => {

  const infos: CardProps[] = [
    {
      title: "Form 1" ,
      description: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
      type: "Form",
      link: "teste.com.br",
    },
    {
      title: "Form 2" ,
      description: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
      type: "Form",
      link: "teste.com.br",
    },
    {
      title: "Form 3" ,
      description: "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE",
      type: "Form",
      link: "teste.com.br",
    }
  ];

  return (
    <>
      <Dashboard >
        <Container>
          <h1>Formulários</h1>
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