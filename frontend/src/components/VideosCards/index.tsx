import { useContext } from "react";
import { VideosContext } from "../../Contexts/VideosContext";
import { Card } from "../Card";
import { Container } from "./styles";

export function VideosCards() {
  const {videos} = useContext(VideosContext);
  return(
    <Container>
      {videos.map(video => (
        <div className="Space" key={video.id}>
          <Card 
            title={video.name} 
            description={video.description} 
            type='vídeo' 
            link={video.link} 
            route={'video/reproduction'}
            id={video.id} 
          />
        </div>
      ))}
    </Container>
  )
}