import styled from "styled-components";

export interface RepFormsProps {}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  iframe{
    border-radius:0.5rem;
    width: 50rem;
    min-height: 100vh;
  }
`;
export const RepForm: React.FC<RepFormsProps> = props => {
  const formLink = localStorage.getItem('link');


  return (
    <Container>
      <div>
        <iframe src={formLink as string} title="Formulário" />
      </div>
    </Container>
  )
}