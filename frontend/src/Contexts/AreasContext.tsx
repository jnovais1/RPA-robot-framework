import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface AreaInterface{
  id: number,
  name: string,
  description: string,
}

interface AreaInput{
  name: string,
  description: string,
  user_id: number,
};

interface AreasProviderProps {
  children: ReactNode;
}

interface AreasContextData {
  areas: AreaInterface[];
  createArea: (area: AreaInput, token: string) => Promise<string>;
  updateArea: (id: number, area: AreaInput, token: string) => Promise<string>;
  deleteArea: (id: number, token: string) => Promise<string>;
}

export const AreasContext = createContext<AreasContextData>(
  {} as AreasContextData
);

export function AreasProvider({children}: AreasProviderProps) {
  const [areas, setAreas] = useState<AreaInterface[]>([]);
  
  useEffect(() => {
    api.get('area')
      .then(response => setAreas(response.data))
  }, [])

  async function createArea(areaInput: AreaInput, token: string){
    try{
      const response = await api.post('area', areaInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const area = response.data;
      const statusText = response.statusText;

      setAreas([
        ...areas,
        area
      ]);
      return statusText;
    }catch(err){
      return 'Error';
    }

  }

  async function updateArea(id: number, areaInput: AreaInput, token: string) {
    try{
      const response = await api.put('area/'+id, areaInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const area = response.data;
      const statusText = response.statusText;

      const index = areas.map(area => area.id).indexOf(id);

      let updatedArr = [...areas];
      updatedArr[index].name = area.name;
      updatedArr[index].description = area.description;

      setAreas(updatedArr);

      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function deleteArea(id: number, token: string ) {
    try{
      const response = await api.delete('area/'+id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const statusText = response.statusText;

      setAreas(areas.filter(area=> area.id !== id));

      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  return (
    <AreasContext.Provider value={{ areas, createArea, updateArea, deleteArea}}>
      {children}
    </AreasContext.Provider>
  );
}