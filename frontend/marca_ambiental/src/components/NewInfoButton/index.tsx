import {Container} from './styles';

export interface ButtonProps {
  title: string;
  onOpen: () => void;
}

export function NewInfoButton({title, onOpen}: ButtonProps) {

  return(
    <>
      <Container>
        {title === 'área' ? (
          <button type="button" onClick={onOpen}>Nova {title}</button>
        ) : (
          <button type="button" onClick={onOpen}>Novo {title}</button>
        )}
      </Container>
    </>
  );

}