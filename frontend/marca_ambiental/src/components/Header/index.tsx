import { ReactNode } from "react";
import {Container, Content} from "./styles";
import logo from "../../assets/logo.png";

export interface HeaderProps{
  children: ReactNode;

}

export function Header(props: HeaderProps){
  return (
    <Container>
      <Content>
        {props.children}
        <img src={logo} alt="logo" />
      </Content>
    </Container>
  )
}