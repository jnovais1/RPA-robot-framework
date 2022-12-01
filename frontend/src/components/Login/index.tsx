import { FormEvent, useContext, useState } from "react";
import { 
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptions, 
  ButtonContainer
} from "./styles";

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../Contexts/AuthContext";
import { LoginError } from "../LoginError";

export interface LoginProps {
}


export function LoginContainer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const { logIn } = useContext(AuthContext);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  function handleCloseErrorModal() {
    setIsErrorModalOpen(false);
  }
  
  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    const data = {
      username,
      password,
    }
    
    const status = await logIn(data);
    if(status === 'OK'){
      navigate('/')
    }else {
      setIsErrorModalOpen(true);
    }
  }
  return (
    <CardWrapper>
        <CardHeader>
          <CardHeading>Login</CardHeading>
        </CardHeader>

        <CardBody>
          <form onSubmit={handleCreateUser}>
            <CardFieldset>
              <input 
                placeholder="Usuário" 
                type="text" required 
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </CardFieldset>

            <CardFieldset>
              <input 
                placeholder="Senha" 
                type="password" required 
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </CardFieldset>

            <CardFieldset>
              <CardOptions>

              </CardOptions>
            </CardFieldset>

            <CardFieldset>
              <ButtonContainer>
                <button type="submit" >Confirmar</button>
                <Link to='/'>Cancelar</Link>
              </ButtonContainer>
            </CardFieldset>
          </form>
        </CardBody>
        <LoginError
          isOpen={isErrorModalOpen}
          onRequestClose={handleCloseErrorModal}        
        />
      </CardWrapper>
      
  )
}