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

export const Video: React.FC<FormsProps> = props => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const infos: CardProps[] = [
    {
      title: "Video 1" ,
      description: "teste teste",
      type: "video",
      link: "#",
    },
    {
      title: "Video 2" ,
      description: "teste teste",
      type: "video",
      link: "#",
    },
    {
      title: "Video 3" ,
      description: "teste teste",
      type: "video",
      link: "#",
    }
  ];

  return (
    <>
      <Dashboard >
        <Container>
          <Content>
            <h1>Videos</h1>
            <NewInfoButton title="video" onOpen={handleOpenModal}/>
          </Content>
          {infos.map(info => (
            <div className="Space">
              <Card title={info.title} description={info.description} type={info.type} link={info.link} />
            </div>
          ))}
        </Container>
      </ Dashboard>
      <NewInfoModal title="video" isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
  )
}