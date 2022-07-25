import React from 'react';
import { Container, NavbarLink } from './styles';

export interface SidebarProps {
  open: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, ...props }) => {
  return (
    <>
      <Container open={open} >

          <NavbarLink to="/" className="nav-link active" >
            Pagina Inicial
          </NavbarLink>
          <NavbarLink to="area" className="nav-link">
            Areas
          </NavbarLink>
          <NavbarLink to="forms" className="nav-link">
            Formulários
          </NavbarLink>
          <NavbarLink to="user" className="nav-link">
            Usuários
          </NavbarLink>
          <NavbarLink to="about" className="nav-link">
            Sobre
          </NavbarLink>

      </Container>
    </>
  )
}
