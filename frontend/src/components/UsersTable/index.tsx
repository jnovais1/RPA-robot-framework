import React, { useContext } from 'react';
import {Container} from './styles';
import editing from "../../assets/editing.png";
import trash from "../../assets/trash.png";
import { FormEvent, useState } from 'react';
import { DeleteModal } from '../DeleteModal';
import { UpdateUserModal } from '../UpdateUserModal';
import { UsersContext } from '../../Contexts/UsersContext';

export interface UserInterface{
  name: string,
  email: string,
  username: string,
  id: number,
  created_at: string,
}

export function UsersTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState(0);

  

  function handleDeleteUser(event: FormEvent, user: UserInterface) {
    setName(user.name);
    setId(Number(user.id));

    setIsModalOpen(true);
  }

  function handleUpdateUser(event: FormEvent, user: UserInterface){
    console.log(user)
    setName(user.name);
    setId(Number(user.id));
    setEmail(user.email);
    setUsername(user.username);

    setIsModalUpdateOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleCloseUpdateModal() {
    setIsModalUpdateOpen(false);
  }

  const {users} = useContext(UsersContext);

  return (
    <Container>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Nome de usuário</th>
            <th>Criado em</th>
            <th>Alterar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.created_at}</td>
              <td>
                <button type='button' onClick={event => handleUpdateUser(event, user)}>
                    <img src={editing} alt="editing" />
                </button>
              </td>
              <td>
                <button className="Delete" type='button' onClick={event => handleDeleteUser(event, user)}>
                  <img src={trash} alt="trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal 
        type='usuário' 
        title={name} 
        id={id} 
        isOpen={isModalOpen} 
        onRequestClose={handleCloseModal}
      />
      <UpdateUserModal 
        nameOld={name}
        id={id}
        emailOld={email}
        usernameOld={username}
        isOpen={isModalUpdateOpen} 
        onRequestClose={handleCloseUpdateModal}
      />
    </Container>
  )
}