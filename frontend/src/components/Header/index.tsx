import { ReactNode, useContext } from "react";
import {Container, Content} from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export interface HeaderProps{
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const {LogOut} = useContext(AuthContext);


  const {user} = useContext(AuthContext);

  function handleLogout() {
    LogOut();
  }
  return (
    <Container>
      <Content>
        {props.children}
        <Link to='/' className="logolink"><img src={logo} alt="logo" /></Link>
        {(user >= 0)?(
          <Link className='link' to='/' onClick={handleLogout}>sair</Link>
        ):(
          <Link className='link' to='admin'>login</Link>
        )}
      </Content>
    </Container>
  )
}