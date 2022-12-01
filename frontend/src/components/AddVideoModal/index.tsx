import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { AreasVideosContext } from '../../Contexts/AreasVideosContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { VideosContext } from '../../Contexts/VideosContext';
import { Container, Content } from './styles';


interface DeleteModalProps {
  id: number;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AddVideoModal({id, isOpen, onRequestClose}: DeleteModalProps) {
  const {createAreaVideo} = useContext(AreasVideosContext);
  const [videoId, setVideoId] = useState(0);

  const {user, token} = useContext(AuthContext);

  async function handleAddVideo(event: FormEvent) {
    event.preventDefault();

    createAreaVideo({
      video_id: videoId,
      area_id: id,
      user_id: Number(user),
      order: 1,
    }, token);

    onRequestClose();
  }

  const {videos} = useContext(VideosContext);
  const areaVideos = useContext(AreasVideosContext);

  let videosArr = videos;
  
  areaVideos.videos.map(video=>(
      videosArr = videosArr.filter(videoArr=> video.id !== videoArr.id)
    )
  );


  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName=" react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <Container onSubmit={handleAddVideo}>
          <Content>  
              {videosArr.map( video => (
                <div key={video.id}>
                  <input 
                    type="radio" 
                    value={video.id} 
                    name='videos'
                    onChange={event => setVideoId(Number(event.target.value))}
                  />
                  <label>{video.name}</label>
                </div>
              ))}
            </Content>
          <div>
            <button type='submit'>Confirmar</button>
            <button type='button' onClick={onRequestClose}>Cancelar</button>
          </div>
        </Container>
      </Modal>
    
    </>
  )
}