import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 16px;
  }
  div{
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