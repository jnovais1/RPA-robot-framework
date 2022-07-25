import { 
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardOptions, 
  ButtonContainer
} from "./styles";

export function LoginContainer() {
  return (
    <CardWrapper>
        <CardHeader>
          <CardHeading>Login</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Usuário" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Senha" type="password" required />
          </CardFieldset>

          <CardFieldset>
            <CardOptions>

            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <ButtonContainer>
              <button type="button">Confirmar</button>
              <a href='/'>Cancelar</a>
            </ButtonContainer>
          </CardFieldset>

        </CardBody>
      </CardWrapper>
  )
}