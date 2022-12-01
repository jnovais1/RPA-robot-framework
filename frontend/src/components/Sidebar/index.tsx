import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Container, NavbarLink } from './styles';
import area_icon from '../../assets/Area.svg';
import forms_icon from '../../assets/Forms.svg';
import home_icon from '../../assets/Home.svg';
import team_icon from '../../assets/Team.svg';
import user_icon from '../../assets/User.svg';
import videos_icon from '../../assets/Videos.svg';


export interface SidebarProps {
  open: boolean;
  setOpen: Function;
}



export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Container open={open} >

          <NavbarLink to="/" className="nav-link active" onClick={() => setOpen(!open)}>
            <img src={home_icon} alt="Pagina inicial" />
            Página Inicial
          </NavbarLink>
          <NavbarLink to="area" className="nav-link" onClick={() => setOpen(!open)}>
            <img src={area_icon} alt="Area" />
            Áreas
          </NavbarLink>
          <NavbarLink to="forms" className="nav-link" onClick={() => setOpen(!open)}>
            <img src={forms_icon} alt="Formulário" />
            Formulários
          </NavbarLink>
          <NavbarLink to="video" className="nav-link" onClick={() => setOpen(!open)}>
            <img src={videos_icon} alt="Vídeos" />
            Vídeos
         </NavbarLink>
          {user >= 0?(
            <NavbarLink to="user" className="nav-link" onClick={() => setOpen(!open)}>
              <img src={user_icon} alt="Usuários" />
              Usuários
            </NavbarLink>
          ):(
            <></>
          )}
          <NavbarLink to="about" className="nav-link" onClick={() => setOpen(!open)}>
              <img src={team_icon} alt="Equipe" />
              O Projeto
          </NavbarLink>

      </Container>
    </>
  )
}
