import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Dashboard } from "../components/Dashboard";
import { NewUserButton } from "../components/NewUserButton";
import { NewUserModal } from "../components/NewUserModal";
import { UsersTable } from "../components/UsersTable";
import { AuthContext } from "../Contexts/AuthContext";
import { UsersProvider } from "../Contexts/UsersContext";


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

export interface UserProps{
}

export const User: React.FC<UserProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {user} = useContext(AuthContext);

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  if((user === undefined)){
    return(
      <Navigate to='/' />
    )
  }
  return (
    <UsersProvider>
      <Dashboard >
        <Container>
          <Content>
            <h1>Usuários</h1>
            <NewUserButton onOpen={handleOpenModal}/>
          </Content>
          <UsersTable />
        </Container>
      </ Dashboard>
      <NewUserModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </ UsersProvider>
  );
}