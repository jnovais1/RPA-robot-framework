import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Dashboard } from "../components/Dashboard";
import { useParams } from "react-router-dom";
import { AddVideoButton } from "../components/AddVideoButton";
import { AddVideoModal } from "../components/AddVideoModal";
import { AreasVideosProvider } from "../Contexts/AreasVideosContext";
import { AreaVideoCards } from "../components/AreaVideoCards";
import { VideosProvider } from "../Contexts/VideosContext";
import { AuthContext } from "../Contexts/AuthContext";

export interface AreaVideoProps {
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


export const AreaVideo: React.FC<AreaVideoProps> = props => {
  const {id, name} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const {user} = useContext(AuthContext);

  return (
    <AreasVideosProvider>
      <Dashboard >
        <Container>
          <Content>
            <h1>{name}</h1>
            {(user >= 0)?(
              <AddVideoButton onOpen={handleOpenModal}/>
            ):(
              <></>
            )}
          </Content>
          <AreaVideoCards id={Number(id)} />
        </Container>
      </ Dashboard>
      <VideosProvider>
        <AddVideoModal id={Number(id)} isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      </VideosProvider>
    </ AreasVideosProvider>
  )
}