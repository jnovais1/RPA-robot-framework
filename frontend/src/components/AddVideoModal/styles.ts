import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  .selectInput {
    width: 100%;
    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;
  }
  
  div + div{
    display: flex;
    
    button {
      margin-top: 2rem;
      display: block;

      padding: 0.75rem 1rem 0.75rem 1rem ;
      font-family: inherit;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      background-color: var(--light-green);
      border: 0;
      border-radius: 0.25rem;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

      &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
      }
    }
    button + button {
        text-decoration: none;
        background-color: var(--grey);

        margin-left: 2rem;
    }
  }
`;

export const Content = styled.div `
  overflow-y: scroll;
  max-height: 15rem;
  input{
    margin-right: 0.25rem; 
    margin-top: 0.5rem;
  }
  label{
      margin-top: 0.5rem;
  }  
`