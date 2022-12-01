import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';
import { FormEvent, useState, useContext } from 'react';
import { UsersContext } from '../../Contexts/UsersContext';
import { SuccessModal } from '../SuccessModal';
import { ErrorModal } from '../ErrorModal';
import { AuthContext } from '../../Contexts/AuthContext';

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose}: ModalProps) {
  const {createUser} = useContext(UsersContext);
  const {token} = useContext(AuthContext);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
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

    const status = await createUser({
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

    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
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