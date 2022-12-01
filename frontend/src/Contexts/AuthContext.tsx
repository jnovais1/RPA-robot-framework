import { createContext, ReactNode, useCallback, useState } from "react";
import { api } from "../services/api";

interface AuthState {
  token: string;
  id: number;
}

interface AuthInput {
  username: string;
  password: string;
}

interface AuthProviderProps{
  children: ReactNode;
}

interface AuthContextData{
  user: number;
  token: string;
  logIn(data: AuthInput): Promise<string>;
  LogOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({children}: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    const id =localStorage.getItem('id');

    if(token && id ){
      const intId = parseInt(id)
      return {
        token, id: intId, 
      }
    }
    return {} as AuthState;
  }); 

  const logIn = useCallback(async (data: AuthInput) => {
    try{
      const response = await api.post('user/authenticate', data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('username', response.data.username);
      setData({token: response.data.token, id: parseInt(response.data.id)});

      return response.statusText;
    }catch(err){
      return 'Error';
    }

  }, []);

  async function LogOut() {
    localStorage.clear();
    setData({} as AuthState);
  }



  return (
    <AuthContext.Provider value={{ user: data.id, token: data.token, logIn, LogOut}}>
      {children}
    </AuthContext.Provider>
  );
}