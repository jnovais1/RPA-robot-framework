import React, { useContext, useState } from "react";
import {Container, Content, LinkCard} from "./styles";
import trash from "../../assets/trash.png";
import editing from "../../assets/editing.png";
import { DeleteModal } from "../DeleteModal";
import { UpdateInfoModal } from "../UpdateInfoModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export interface CardProps {
  title: string;
  description: string;
  type: string;
  link: string;
  id: number;
  idArea?: number;
  route: string;
}

export const Card: React.FC<CardProps> = ({title, description, type, link, id, idArea, route}) => {
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const {user} = useContext(AuthContext);
  

  let endOfLink = ''
  if(type==='vídeo' || type === 'areavideo'){ 
    if(link.indexOf('be/')!== -1){
      endOfLink = link.split('be/')[1];
    } else {
      endOfLink = link.split('v=')[1];
      var idPosition = endOfLink.indexOf('&');
        if(idPosition !== -1) {
          endOfLink = endOfLink.substring(0, idPosition);
        }
    }
  }
  
  function handleOpenModalDelete(){
    setIsModalOpenDelete(true);
  }

  function handleOpenModalUpdate(){
    setIsModalOpenUpdate(true);
  }


  function handleCloseModalDelete() {
    setIsModalOpenDelete(false);
  }

  function handleCloseModalUpdate() {
    setIsModalOpenUpdate(false);
  }

  function handleStorageLink() {
    localStorage.setItem('link', link)
  }

  console.log(route)
  return (
    <>
      <Container> 
        <Content>
          <LinkCard>
            {type==='formulário'?(
              <a href={link}>
                <div>
                  <h4 className="Title">{title}</h4>
                  <p className="BigText">{description}</p>
                </div>
              </a>
            ):
            <Link to={`/${route}`} onClick={handleStorageLink}>
              {type==='vídeo' || type === 'areavideo'?(
                <div> 
                  <img 
                    className="Thumbnail"
                    alt=''
                    src={`http://img.youtube.com/vi/${endOfLink}/0.jpg`}
                  />
                </div>
              ):(<></>)}
              <div >
                <h4 className="Title">{title}</h4>
                <p className="BigText">{description}</p>
              </div>
            </Link>

              }
              { (user >= 0) ? (


              <div className='inLine'>
                {type!=='areavideo'?(
                  <button type='button' onClick={handleOpenModalUpdate}>
                    <img src={editing} alt="editing" />
                 </button>
                 ):(<></>)}
                <button type='button' className="Delete" onClick={handleOpenModalDelete}>
                  <img src={trash} alt="trash" />
                </button>
              </div>
            ):(<></>)
            }
          </LinkCard>
        </Content>
        <DeleteModal 
          type={type} 
          title={title} 
          id={id}
          isOpen={isModalOpenDelete} 
          onRequestClose={handleCloseModalDelete} 
          idArea={idArea}
        />
        <UpdateInfoModal 
          id={id} 
          type={type} 
          titleOld={title} 
          descriptionOld={description} 
          linkOld={link} 
          isOpen={isModalOpenUpdate} 
          onRequestClose={handleCloseModalUpdate} 
        />
      </Container>
    </>
  );
}