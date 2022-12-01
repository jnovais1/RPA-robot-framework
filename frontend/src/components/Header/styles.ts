import styled from 'styled-components';

export const Container = styled.header`
  // background-color: var(--dark-green);
  background-image: linear-gradient(to right, var(--dark-green), var(--light-green))
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logolink {
    margin: 0 auto;
    img{
      width: 92px;
      height: 100px;
    }
  }

  .link {
    background: rgba(0,0,0,0);
    color: #FFF;
    border: 0px;
    text-decoration: none;
  }
`;