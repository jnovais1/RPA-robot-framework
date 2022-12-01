import Modal from 'react-modal';
import { Container } from './styles';

interface SuccessModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SuccessModal({  isOpen, onRequestClose, }: SuccessModalProps) {
  
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
          <p>Operação realizada com sucesso</p>
          <div>
            <button type='button' onClick={onRequestClose}>OK</button>
          </div>
        </Container>
      </Modal>
    
    </>
  )
}