import { Container } from "./styles";

export interface ButtonProps {
  onOpen: () => void;
}

export function AddVideoButton({onOpen} :ButtonProps) {

  return(
    <>
      <Container>
        <button type="button" onClick={onOpen}>Adicionar video</button>
      </Container>
    </>
  );

}