import Modal from 'react-modal';
import { Container } from './styles';

interface ErrorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ErrorModal({  isOpen, onRequestClose, }: ErrorModalProps) {
  
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
          <p>Ocorreu um erro durante a operação</p>
          <div>
            <button type='button' onClick={onRequestClose}>OK</button>
          </div>
        </Container>
      </Modal>
    
    </>
  )
}