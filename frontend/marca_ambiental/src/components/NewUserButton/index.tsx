import {Container} from './styles';

export interface ButtonProps {
  onOpen: () => void;
}

export function NewUserButton({ onOpen}: ButtonProps) {

  return(
    <>
      <Container>
        <button type="button" onClick={onOpen}>Novo usuários</button>

      </Container>
    </>
  );

}