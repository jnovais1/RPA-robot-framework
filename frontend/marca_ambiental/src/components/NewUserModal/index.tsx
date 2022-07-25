import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose}: ModalProps) {

  return(
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName=" react-modal-overlay"
        className="react-modal-content"
      >
        <ModalContainer>
          <h2>Cadastrar usuário</h2>

          <h4>Nome: </h4>
          <input 
          />

          <h4>Email: </h4>
          <input
          />
          <h4>Nome de usuário: </h4>
          <input
          />
          <h4>Senha: </h4>
          <input
          />
          <h4>Confirmar senha: </h4>
          <input
          />
          <ButtonDiv>
            <button type="submit">
              Cadastrar
            </button>
            <button type="submit">
              Cancelar
            </button>
          </ButtonDiv>
        </ModalContainer>
      </Modal>
    </>
  );

}