import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import { FormsContext } from '../../Contexts/FormsContext';
import { AreasContext } from '../../Contexts/AreasContext';
import { VideosContext } from '../../Contexts/VideosContext';
import { SuccessModal} from '../SuccessModal';
import { ErrorModal } from '../ErrorModal';
import { AuthContext } from '../../Contexts/AuthContext';

export interface ModalProps {
  type: string;
  isOpen: boolean;
  onRequestClose: () => void;  
}
export function NewInfoModal({type, isOpen, onRequestClose, }: ModalProps) {

  const {createForm} = useContext(FormsContext);
  const {createArea} = useContext(AreasContext);
  const {createVideo} = useContext(VideosContext);
  const {user, token} = useContext(AuthContext);


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  function handleCloseSuccessModal() {
    setIsSuccessModalOpen(false);
  }

  function handleCloseErrorModal() {
    setIsErrorModalOpen(false);
  }
  
  async function handleCreateInfo(event: FormEvent) {
    event.preventDefault();
    let status;
    
    if(type === 'formulário'){

      status = await createForm({
          title,
          description,
          link,
          user_id: Number(user),
        }, token);

    } else if (type === 'vídeo') { 

      status = await createVideo({
            name: title,
            description,
            link,
            user_id: Number(user),
          }, token);
    } else {
      
      status = await createArea({
        name: title,
        description,
        user_id: Number(user),
      }, token);
      
    }
    
    if(status === 'OK'){
      setIsSuccessModalOpen(true);
    } else {
      setIsErrorModalOpen(true);
    }
  
    setTitle('');
    setDescription('');
    setLink('');
    onRequestClose();
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
        <ModalContainer onSubmit={handleCreateInfo}>
          <h2>Cadastrar {type}</h2>

          <h4>Titulo: </h4>
          <input 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <h4>Descrição: </h4>
          <textarea 
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          {type === "área" ? (
              <>
              </>
            ):(
              <>
                <h4>Link: </h4>
                <input 
                  value={link}
                  onChange={event => setLink(event.target.value)}
                />
              </>
            )
          }
          <ButtonDiv>
            <button type="submit" >
              Cadastrar
            </button >
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