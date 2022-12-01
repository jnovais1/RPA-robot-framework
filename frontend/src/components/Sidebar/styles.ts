import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props{
  open: boolean
}

export const Container = styled.nav<Props> `
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, var(--dark-green), #248d52);
  height: 100vh;
  padding: 2rem 0.5rem 0.5rem 1rem;
  position: absolute;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;

export const NavbarLink = styled(Link) `
  line-height: 5px;
  font-size: 2rem;
  padding: 3rem;
  margin: 0.5rem;
  text-align: center;
  color: #FFF;
  text-decoration: none;
  background: var(--light-green);
  border: 0;
  border-radius: 0.25rem;
  height: 2rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;




  &:focus{
    background: var(--dark-green);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2) inset;
  }
  img{
    margin-right: 1rem;
    height: 2.5rem;
    width: 2.5rem;
    /* margin-right: 3rem; */
  }

  
`;

