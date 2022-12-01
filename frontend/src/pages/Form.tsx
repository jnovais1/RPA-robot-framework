import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Dashboard } from "../components/Dashboard";
import { FormsCards } from "../components/FormsCards";
import { NewInfoButton } from "../components/NewInfoButton";
import { NewInfoModal } from "../components/NewInfoModal";
import { AuthContext } from "../Contexts/AuthContext";
import { FormsProvider } from "../Contexts/FormsContext";

export interface FormsProps { 
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


export const Form: React.FC<FormsProps> = props => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const {user} = useContext(AuthContext);

  return (
    <FormsProvider>
      <Dashboard >
        <Container>
          <Content>
            <h1>Formulários</h1>
            {(user >= 0)?(
              <NewInfoButton title="formulário" onOpen={handleOpenModal}/>
            ):(
              <></>
            )}
          </Content>
          <FormsCards />
        </Container>
      </ Dashboard>
      <NewInfoModal type="formulário" isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </ FormsProvider>
  )
}