import { useContext } from "react";
import { AreasVideosContext } from "../../Contexts/AreasVideosContext";
import { Card } from "../Card";
import { Container } from "./styles";

interface AreaVideoCardsProps{
  id: number
}

export function AreaVideoCards ({id}: AreaVideoCardsProps) {
  const {readAreaVideos} = useContext(AreasVideosContext);
  
  readAreaVideos(id);

  const {videos} = useContext(AreasVideosContext);

  return(
    <Container>
      {videos.map(video => (
        <div className="Space" key={video.id}>
          <Card 
            title={video.name} 
            description={video.description} 
            type='areavideo' 
            link={video.link}
            route={'video/reproduction'} 
            id={video.id} 
            idArea={id} 
            />
        </div>
      ))}
    </Container>
  )
}