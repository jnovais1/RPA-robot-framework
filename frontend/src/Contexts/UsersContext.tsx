import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface UserInterface{
  name: string,
  email: string,
  username: string,
  id: number,
  created_at: string,
}

interface UserInput{
  name: string,
  email: string,
  username: string,
  password: string,
};

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: UserInterface[];
  createUser: (user: UserInput, token: string) => Promise<string>;
  updateUser: (id: number, user: UserInput, token: string) => Promise<string>;
  deleteUser: (id: number, token: string) => Promise<string>;
}

export const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData
);

export function UsersProvider({children}: UsersProviderProps) {
  const [users, setUsers] = useState<UserInterface[]>([]);
  
  useEffect(() => {
    api.get('user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(
      res => {
        setUsers(res.data);
      },
      err => {
        console.log(err)
      }
    )
  }, []);

  async function createUser(userInput: UserInput, token: string){
    try{
      const response = await api.post('user', userInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const user = response.data;
      const statusText = response.statusText;

      setUsers([
        ...users,
        user
      ]);

      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function updateUser(id: number, userInput: UserInput, token: string) {
    try{
      const response = await api.put('user/'+id, userInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const user = response.data;
      const statusText = response.statusText;

      const index = users.map(user => user.id).indexOf(id);

      let updatedArr = [...users];
      updatedArr[index].name = user.name;
      updatedArr[index].username = user.username;
      updatedArr[index].email = user.email;

      setUsers(updatedArr);
      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function deleteUser(id: number, token: string) {
    try{
      const response = await api.delete('user/'+id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const statusText = response.statusText;

      setUsers(users.filter(user=> user.id !== id));

      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  return (
    <UsersContext.Provider value={{ users, createUser, updateUser, deleteUser}}>
      {children}
    </UsersContext.Provider>
  );
}