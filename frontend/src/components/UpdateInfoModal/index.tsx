import { ButtonDiv, ModalContainer} from './styles';
import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import { AreasContext } from '../../Contexts/AreasContext';
import { FormsContext } from '../../Contexts/FormsContext';
import { VideosContext } from '../../Contexts/VideosContext';
import { SuccessModal } from '../SuccessModal';
import { ErrorModal } from '../ErrorModal';
import { AuthContext } from '../../Contexts/AuthContext';



export interface ModalProps {
  id: number,
  type: string,
  titleOld: string,
  descriptionOld: string,
  linkOld: string,
  isOpen: boolean,
  onRequestClose: () => void;
}

export function UpdateInfoModal({id, type, titleOld, descriptionOld, linkOld, isOpen, onRequestClose}: ModalProps){
  const {updateArea} = useContext(AreasContext);
  const {updateForm} = useContext(FormsContext);
  const {updateVideo} = useContext(VideosContext);
  const {user, token} = useContext(AuthContext);

  const [title, setTitle] = useState(titleOld);
  const [description, setDescription] = useState(descriptionOld);
  const [link, setLink] = useState(linkOld);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  function handleCloseSuccessModal() {
    setIsSuccessModalOpen(false);
  }

  function handleCloseErrorModal() {
    setIsErrorModalOpen(false);
  }
  
  async function handleUpdateInfo(event: FormEvent) {
    event.preventDefault();
    let status;
    if(type === 'área'){
      status = updateArea(id, {
        name: title,
        description,
        user_id: Number(user),
      }, token);
    } else if(type=== 'formulário') {

      status = updateForm(id, {
        title,
        description,
        link,
        user_id: Number(user),
      }, token);
    } else {

      status = updateVideo(id, {
        name: title,
        description,
        link,
        user_id: Number(user),
      }, token);
    }

    if(await status === 'OK'){
      setIsSuccessModalOpen(true);
    } else {
      setIsErrorModalOpen(true);
    }
    
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
        <ModalContainer onSubmit={handleUpdateInfo}>
          <h2>Alterar {type}</h2>

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