import styled from 'styled-components';

export const ModalContainer = styled.form`

  h2{
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

  }

  h4{
    margin-top: 2rem;
  }

  textarea{
    width: 100%;
    padding: 0.75rem 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    height: 10rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  float: right;
  button {
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
      background-color: var(--dark-green);

      margin-left: 2rem;
  }
`;