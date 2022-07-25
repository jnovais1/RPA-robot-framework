import React, { useState } from "react";
import styled from "styled-components";
import { CardProps } from "../App";
import { Card } from "../components/Card";
import { Dashboard } from "../components/Dashboard";
import { NewInfoButton } from "../components/NewInfoButton";
import { NewInfoModal } from "../components/NewInfoModal";

export interface FormsProps {}

const Container = styled.div`
  padding-top: 2rem;
  display: row;
  
  align-items: center;

  .Space {
    margin-top: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  h1{
    margin-left: 2rem;
    color: #FFF;
    text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Form: React.FC<FormsProps> = props => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

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
          <Content>
            <h1>Formulários</h1>
            <NewInfoButton title="formulário" onOpen={handleOpenModal}/>
          </Content>
          {infos.map(info => (
            <div className="Space">
              <Card title={info.title} description={info.description} type={info.type} link={info.link} />
            </div>
          ))}
        </Container>
      </ Dashboard>
      <NewInfoModal title="formulário" isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
  )
}