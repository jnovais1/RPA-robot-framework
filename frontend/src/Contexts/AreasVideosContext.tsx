/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface AreaVideoInterface{
  id: number;
  name: string;
  description: string;
  link: string;
}

interface AreaVideoInput{
  area_id: number,
  video_id: number,
  user_id: number,
  order: number,
};

interface AreasVideosProviderProps {
  children: ReactNode;
}

interface AreasVideosContextData {
  videos: AreaVideoInterface[];
  readAreaVideos: (idArea: number) => Promise<void>;
  createAreaVideo: (video: AreaVideoInput, token: string) => Promise<string>;
  deleteAreaVideo: (id: number, idVideo: number, token: string) => Promise<string>;
}

export const AreasVideosContext = createContext<AreasVideosContextData>(
  {} as AreasVideosContextData
);

export function AreasVideosProvider({children}: AreasVideosProviderProps) {
  const [videos, setVideos] = useState<AreaVideoInterface[]>([]);
  
  async function readAreaVideos(id: number){
    useEffect(() => {
      api.get('areavideo/'+id)
        .then(response => setVideos(response.data))
    }, [id])
  }

  async function createAreaVideo(areaInput: AreaVideoInput, token: string){
    try{  
      const response = await api.post('areavideo', areaInput , {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const video = response.data;
      
      const statusText = response.statusText;

      setVideos([
        ...videos,
        video
      ]);
      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function deleteAreaVideo(idArea: number, idVideo: number, token: string) {
    try{
      const response = await api.delete(`areavideo/${idArea}/${idVideo}`,{
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      const statusText = response.statusText;

      setVideos(videos.filter(video=> video.id !== idVideo));

      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  return (
    <AreasVideosContext.Provider value={{ videos, readAreaVideos, createAreaVideo, deleteAreaVideo}}>
      {children}
    </AreasVideosContext.Provider>
  );
}