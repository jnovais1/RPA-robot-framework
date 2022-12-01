import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Dashboard } from "../components/Dashboard";
import { NewInfoButton } from "../components/NewInfoButton";
import { NewInfoModal } from "../components/NewInfoModal";
import { VideosCards } from "../components/VideosCards";
import { AuthContext } from "../Contexts/AuthContext";
import {  VideosProvider } from "../Contexts/VideosContext";

export interface VideoProps {
}

const Container = styled.div`
  padding-top: 2rem;
  display: row;
  
  align-items: center;

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



export const Video: React.FC<VideoProps> = props => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const {user} = useContext(AuthContext);

  return (
    <VideosProvider>
      <Dashboard >
        <Container>
          <Content>
            <h1>Vídeos</h1>
            {(user >= 0)?(
              <NewInfoButton title="vídeo" onOpen={handleOpenModal}/>
            ):(
              <></>
            )}
          </Content>
          <VideosCards />
        </Container>
      </ Dashboard>
      <NewInfoModal type="vídeo" isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </ VideosProvider>
  )
}