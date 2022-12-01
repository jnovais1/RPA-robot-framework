import { useContext } from "react";
import { FormsContext } from "../../Contexts/FormsContext";
import { Card } from "../Card";
import { Container } from "./styles";


export function FormsCards() {
  
  const {forms} = useContext(FormsContext);
  return( 
    <Container>
      {forms.map(form => (
        <div className="Space" key={form.id}>
          <Card 
            title={form.title} 
            description={form.description} 
            type='formulário' 
            route={`forms/${form.title}`}
            link={form.link} 
            id={form.id} 
          />
        </div>
      ))}
    </Container>
  )
}