import { ReactNode } from "react";
import { Container } from "./styles";

export interface DashboardProps{
  children: ReactNode;

}

export function Dashboard(props: DashboardProps){
  return(
    <Container>
      {props.children}
    </Container>
  )
}