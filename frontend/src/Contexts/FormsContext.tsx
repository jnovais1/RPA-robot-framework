import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface FormInterface{
  id: number;
  title: string;
  description: string;
  link: string;
}

interface FormInput{
  title: string,
  description: string,
  link: string,
  user_id: number,
};

interface FormsProviderProps {
  children: ReactNode;
}

interface FormsContextData {
  forms: FormInterface[];
  createForm: (form: FormInput, token: string) => Promise<string>;
  updateForm: (id: number, form: FormInput, token: string) => Promise<string>;
  deleteForm: (id: number, token: string) => Promise<string>;
}

export const FormsContext = createContext<FormsContextData>(
  {} as FormsContextData
);

export function FormsProvider({children}: FormsProviderProps) {
  const [forms, setForms] = useState<FormInterface[]>([]);
  
  useEffect(() => {
    api.get('forms')
      .then(response => setForms(response.data))
  }, [])

  async function createForm(formInput: FormInput, token: string){
    try{
      const response = await api.post('forms', formInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const form = response.data;
      const statusText = response.statusText;

      setForms([
        ...forms,
        form
      ]);

      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function updateForm(id: number, formInput: FormInput, token: string) {
    try{ 
      const response = await api.put('forms/'+id, formInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const form = response.data;
      const statusText = response.statusText;

      const index = forms.map(form => form.id).indexOf(id);

      let updatedArr = [...forms];
      updatedArr[index].title = form.title;
      updatedArr[index].description = form.description;
      updatedArr[index].link = form.link;

      setForms(updatedArr);
      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function deleteForm(id: number, token: string) {
    try{
      const response = await api.delete('forms/'+id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const statusText = response.statusText;

      setForms(forms.filter(form=> form.id !== id));
      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  return (
    <FormsContext.Provider value={{ forms, createForm, updateForm, deleteForm}}>
      {children}
    </FormsContext.Provider>
  );
}