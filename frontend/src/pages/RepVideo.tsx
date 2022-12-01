import styled from "styled-components";

export interface RepVideoProps {}

export const RepVideo: React.FC<RepVideoProps> = props => {
  
  const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
    
`;
  const videoLink = localStorage.getItem('link') as string; 
  
  var endOfLink = ''
  if(videoLink.indexOf('be/')!== -1){
    endOfLink = videoLink.split('be/')[1];
  } else {
    endOfLink = videoLink.split('v=')[1];
    var idPosition = endOfLink.indexOf('&');
      if(idPosition !== -1) {
        endOfLink = endOfLink.substring(0, idPosition);
      }
  }

  const youtube = "https://www.youtube.com/embed/";
  const link = youtube + endOfLink;

  return (
    <>
    <Container>
    <div>
      <iframe 
        width="854" 
        height="480" 
        src={link} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe> 
    </div>
    </Container>
    </>
  )
}

