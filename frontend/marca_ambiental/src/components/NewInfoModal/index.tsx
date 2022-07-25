import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewInfoModal({title, isOpen, onRequestClose}: ModalProps) {

  return(
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName=" react-modal-overlay"
        className="react-modal-content"
      >
        <ModalContainer>
          <h2>Cadastrar {title}</h2>

          <h4>Titulo: </h4>
          <input 
          />

          <h4>Descrição: </h4>
          <textarea 
          />

          {title === "área" ? (
              <>
                <h4>Videos: </h4>
                <input />
              </>
            ):(
              <>
                <h4>Link: </h4>
                <input />
              </>
            )
          }
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