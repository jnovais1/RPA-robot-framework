import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AreasCards } from "../components/AreasCards";
import { Dashboard } from "../components/Dashboard";
import { NewInfoButton } from "../components/NewInfoButton";
import { NewInfoModal } from "../components/NewInfoModal";
import { AreasProvider } from "../Contexts/AreasContext";
import { AuthContext } from "../Contexts/AuthContext";

export interface AreaProps {
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

export const Area: React.FC<AreaProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const {user} = useContext(AuthContext);
  
  return (
      <AreasProvider>
        <Dashboard>
        <Container>
          <Content>
            <h1>Áreas</h1>
            {(user >= 0) ? (
              <NewInfoButton title="área" onOpen={handleOpenModal} />
            ) : (
              <></>
            )}
          </Content>
          <AreasCards />
        </Container>
      </Dashboard>
      <NewInfoModal 
        type="área" 
        isOpen={isModalOpen} 
        onRequestClose={handleCloseModal} 
      />
    </AreasProvider>
  )
}