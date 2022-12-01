import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface VideoInterface{
  id: number;
  name: string;
  description: string;
  link: string;
}

interface VideoInput{
  name: string,
  description: string,
  link: string,
  user_id: number,
};

interface VideosProviderProps {
  children: ReactNode;
}

interface VideosContextData {
  videos: VideoInterface[];
  createVideo: (video: VideoInput, token: string) => Promise<string>;
  updateVideo: (id: number, video: VideoInput, token: string) => Promise<string>;
  deleteVideo: (id: number, token: string) => Promise<string>;
}

export const VideosContext = createContext<VideosContextData>(
  {} as VideosContextData
);

export function VideosProvider({children}: VideosProviderProps) {
  const [videos, setVideos] = useState<VideoInterface[]>([]);
  
  useEffect(() => {
    api.get('video')
      .then(response => setVideos(response.data))
  }, [])

  async function createVideo(videoInput: VideoInput, token: string){
    try{  
      const response = await api.post('video', videoInput, {
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

  async function updateVideo(id: number, videoInput: VideoInput, token: string) {
    try{  
      const response = await api.put('video/'+id, videoInput, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const video = response.data;
      const statusText = response.statusText;

      const index = videos.map(video => video.id).indexOf(id);

      let updatedArr = [...videos];
      updatedArr[index].name = video.name;
      updatedArr[index].description = video.description;
      updatedArr[index].link = video.link;

      setVideos(updatedArr);
      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  async function deleteVideo(id: number, token: string) {
    try{
      const response = await api.delete('video/'+id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      const statusText = response.statusText;

      setVideos(videos.filter(video=> video.id !== id));
      return statusText;
    }catch(err){
      return 'Error';
    }
  }

  return (
    <VideosContext.Provider value={{ videos, createVideo, updateVideo, deleteVideo}}>
      {children}
    </VideosContext.Provider>
  );
}