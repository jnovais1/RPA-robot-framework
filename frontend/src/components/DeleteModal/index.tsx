import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AreasContext } from '../../Contexts/AreasContext';
import { AreasVideosContext } from '../../Contexts/AreasVideosContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { FormsContext } from '../../Contexts/FormsContext';
import { UsersContext } from '../../Contexts/UsersContext';
import { VideosContext } from '../../Contexts/VideosContext';
import { ErrorModal } from '../ErrorModal';
import { Container } from './styles';

interface DeleteModalProps {
  title: string;
  type: string;
  id: number;
  idArea?: number;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteModal({title, type, id, isOpen, onRequestClose, idArea}: DeleteModalProps) {
  
  const { deleteUser } = useContext(UsersContext);
  const { deleteArea } = useContext(AreasContext);
  const { deleteForm } = useContext(FormsContext);
  const { deleteVideo } = useContext(VideosContext);
  const { deleteAreaVideo } = useContext(AreasVideosContext);
  const {token} = useContext(AuthContext);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  function handleCloseErrorModal() {
    setIsErrorModalOpen(false);
  }

  async function handleDeleteInfo() {
    let status;
    if (type === 'usuário')
      status = await deleteUser(id,token);
    else if (type === 'área')
      status = await deleteArea(id, token);
    else if (type === 'vídeo')
      status = await deleteVideo(id, token);
    else if(type === 'formulário')
      status = await deleteForm(id, token);
    else{
      status = await deleteAreaVideo(idArea as number, id, token);
    }

    if(status !== 'OK'){
      setIsErrorModalOpen(true);
    }
    
    onRequestClose()
  }

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
          <p>Tem certeza que deseja deletar o(a) {type}: {title}</p>
          <div>
            <button type='button' onClick={handleDeleteInfo}>Confirmar</button>
            <button type='button' onClick={onRequestClose}>Cancelar</button>
          </div>
        </Container>
      </Modal>
      <ErrorModal
        isOpen={isErrorModalOpen}
        onRequestClose={handleCloseErrorModal}        
      />
    
    </>
  )
}