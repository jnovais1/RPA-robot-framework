import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose}: ModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      username,
      password,
    };

    api.post('/user', data);

    
  }

  return(
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName=" react-modal-overlay"
        className="react-modal-content"
      >
        <ModalContainer onSubmit={handleCreateUser}>
          <h2>Cadastrar usuário</h2>

          <h4>Nome: </h4>
          <input 
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <h4>Email: </h4>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <h4>Nome de usuário: </h4>
          <input
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <h4>Senha: </h4>
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <ButtonDiv>
            <button type="submit">
              Cadastrar
            </button>
            <button type="button" onClick={onRequestClose}>
              Cancelar
            </button>
          </ButtonDiv>
        </ModalContainer>
      </Modal>
    </>
  );

}