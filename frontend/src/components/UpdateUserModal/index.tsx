import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import { UsersContext } from '../../Contexts/UsersContext';
import { SuccessModal } from '../SuccessModal';
import { ErrorModal } from '../ErrorModal';
import { AuthContext } from '../../Contexts/AuthContext';

export interface ModalProps {
  nameOld: string,
  id: number,
  emailOld: string,
  usernameOld: string,
  isOpen: boolean,
  onRequestClose: () => void,
}

export function UpdateUserModal({id, nameOld, emailOld, usernameOld, isOpen, onRequestClose}: ModalProps) {
  const {updateUser} = useContext(UsersContext);
  const {token} = useContext(AuthContext);


  const [name, setName] = useState(nameOld);
  const [email, setEmail] = useState(emailOld);
  const [username, setUsername] = useState(usernameOld);
  const [password, setPassword] = useState('');

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  function handleCloseSuccessModal() {
    setIsSuccessModalOpen(false);
  }

  function handleCloseErrorModal() {
    setIsErrorModalOpen(false);
  }

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    const status = await updateUser(id, {
      name,
      email,
      username,
      password,
    }, token);

    if(status === 'OK'){
      setIsSuccessModalOpen(true);
    } else {
      setIsErrorModalOpen(true);
    }

    onRequestClose()

  }
  return(
    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName=" react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
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
    <SuccessModal
      isOpen={isSuccessModalOpen}
      onRequestClose={handleCloseSuccessModal}        
    />
    <ErrorModal
      isOpen={isErrorModalOpen}
      onRequestClose={handleCloseErrorModal}        
    />
  </>
  );
}