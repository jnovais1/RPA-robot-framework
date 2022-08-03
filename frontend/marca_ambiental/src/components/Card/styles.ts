import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 2rem;
`

export const Content = styled.div`
  max-width: 75vh;
  min-width: 75vh;

`

export const LinkCard = styled.a`
  background: #FFF;
  border-radius: 5px;
  width: 100%;
  padding: 20px 24px 16px 24px;
  display: block;
  text-decoration: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  
  display: flex;
  align-items: center;

  justify-content: space-between;
  .Title{
    //margin-bottom: 3rem;
    color: var(--title);
    font-size: 1.5rem;
  }
  .BigText{
    font-size: 0.60rem;
    margin-top: 1rem;
    margin-right: 1rem;
    color: var(--text);
  }

  div + div {
    display: flex;
    button{
      background: var(--blue-button);
      color: #FFF;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.5rem;
      
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      img{
        height: 1rem;
        width: 1rem;
      }


    }
    .Delete{
      background: var(--red-button);
    }
  }
  .FirstVideoLink{
    margin-top: 1rem;
    width: 7rem;
  }
  a{
    text-decoration: none;
    color: #000;
    font-size: 0.75rem;
    margin-left: 0.25rem;
    display: flex;
    align-items: center;
    padding:0;

    &:hover{
      color: var(--light-green);
    }
  }

  .playimg{
    height: 1.5rem;
    width: 1.5rem;
  }
`