import React from "react";
import styled from "styled-components";
import woman from "../assets/woman.png";
import ist from "../assets/ist.svg";
import sesi_tech from "../assets/sesi_tech.svg";
import logo_marca from "../assets/logo_marca.png";

export const ContainerBody = styled.div`
  background: #FFF;
  max-width: 60rem;
  min-height: 90vh;

  margin: auto;
  padding-bottom: 1rem;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const Container = styled.div`
  padding-top: 2rem;
  display: row;
  
  align-items: center;

  h1{
    color: var(--title);
    margin-left: 1rem;
  }
  .BigText{
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    color: #000;
  }

  p{
    text-align: justify;
  }
  .organize1{
    display: flex;
    justify-content: center;
  }
  .organize2{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }
  .woman-image{
    border-radius:1rem;
    margin-top: 2rem;
    height: 322px;
    width: 662px;
     
    }
  .logo-marca-image{
    margin-right: 3rem;
    height: 104px;
    width: 96px;
     
  }
  .ist-image{
    height: 206px;
    width: 218px;
     
  }
  .sesi-tech-image{
      height: 206px;
      width: 218px;
     
  }
`;

export interface AboutProps {}

export const About: React.FC<AboutProps> = props => {
  return (
    <ContainerBody>
      <Container>
        <h1 >Conheça o projeto</h1>
        <p className="BigText">
        A CTR Marca é referência no tratamento e disposição final dos resíduos. 
        Com uma área total de 2,5 milhões de m², somos um parque eco industrias 
        com diferentes atividades no nosso interior. Contamos com uma circulação 
        de mais de 400 pessoas por dia. 
        </p>
        <p className="BigText">
        Hoje um dos maiores desafios para a equipe de Segurança no Trabalho está 
        na divulgação das informações de forma mais eficiente e rápida para todos 
        os setores, gerando assim um obstáculo que promoveu uma oportunidade para 
        a nossa equipe.  Assim nasceu o projeto em parceria com SESI, Instituto 
        SENAI e Findeslab: MÃOS QUE CONECTAM COM A SEGURANÇA.
        </p>
        <p className="BigText">
        O processo consiste na disponibilidade de um QR CODE nas áreas operacionais 
        de forma a garantir o acesso às informações necessárias, de maneira interativa 
        e acessível, fazendo o uso de uma ferramenta de tecnologia de conectividade e 
        informação.
        </p>
        <p className="BigText">
        Atrelado as informações básicas e necessárias para a manutenção de um ambiente 
        de trabalho seguro, o Mãos que Conectam com a Segurança também proporciona um 
        canal  de  comunicação  em  que  se  pode realizar relatos de condições inseguras, 
        temas para DDS online, aspectos e impactos, sugestão de ideias, entre outras 
        informações, através dos formulários disponibilizados. 
        </p>
        <p className="BigText">
        Os vídeos foram desenvolvidos para passarem informações importantes de maneira 
        leve e divertida. A Norminha, personagem que nasceu nesse projeto, vai estar com 
        você, mostrando que isso é possível. 
        </p>
        <p className="BigText">
        Vamos lá? Participe! 
        </p>
        <div className="organize1">
          <img className="woman-image" src={woman} alt="Mulher" />
        </div>

        <div className="organize2">
          <div><img className="logo-marca-image" src={logo_marca} alt="Mulher" /></div>
          <div><img className="sesi-tech-image" src={sesi_tech} alt="Mulher" /></div>
          <div><img className="ist-image" src={ist} alt="Mulher" /></div>
        </div>

      </Container>
    </ContainerBody>
  )
}