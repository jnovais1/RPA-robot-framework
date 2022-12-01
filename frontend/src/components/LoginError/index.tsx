import Modal from 'react-modal';
import { Container } from './styles';

interface ErrorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LoginError({  isOpen, onRequestClose, }: ErrorModalProps) {
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName=" react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <Container>
          <p>Usuário ou senha incorreto(s), tente novamente.</p>
          <div>
            <button type='button' onClick={onRequestClose}>OK</button>
          </div>
        </Container>
      </Modal>
    
    </>
  )
}