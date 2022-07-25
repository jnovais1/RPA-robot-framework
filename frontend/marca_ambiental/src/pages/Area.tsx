import React, { useState } from "react";
import styled from "styled-components";
import { CardProps } from "../App";
import { Card } from "../components/Card";
import { Dashboard } from "../components/Dashboard";
import { NewInfoButton } from "../components/NewInfoButton";
import { NewInfoModal } from "../components/NewInfoModal";

export interface AreaProps {}

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

export const Area: React.FC<AreaProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

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
          <Content>
            <h1>Área</h1>
            <NewInfoButton title="área" onOpen={handleOpenModal}/>
          </Content>
          {infos.map(info => (
            <div className="Space">
              <Card title={info.title} description={info.description} type={info.type} link={info.link} />
            </div>
          ))}
        </Container>
      </ Dashboard>
      <NewInfoModal title="área" isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
  )
}