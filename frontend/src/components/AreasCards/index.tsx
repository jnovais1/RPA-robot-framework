import { Card } from "../Card";
import { useContext } from "react";
import { AreasContext } from "../../Contexts/AreasContext";
import { Container } from "./styles";

export function AreasCards() {

  const {areas} = useContext(AreasContext);
  return( 
    <Container>
      {areas.map(area => (
        <div className="Space" key={area.id}>
          <Card
            title={area.name}
            description={area.description}
            type='área'
            route={`area/${area.name}/${area.id}`}
            link=''
            id={area.id}
            />
        </div>
      ))}
    </Container>
  );
}