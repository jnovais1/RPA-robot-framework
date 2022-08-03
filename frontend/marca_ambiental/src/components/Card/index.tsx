import React from "react";
import { CardProps } from "../../App";
import {Container, Content, LinkCard} from "./styles";
import trash from "../../assets/trash.png";
import editing from "../../assets/editing.png";
import play from "../../assets/play.png";

export const Card: React.FC<CardProps> = ({title, description, type, link}) => {
  console.log(type);

  return (
    <>
      <Container> 
        <Content>
          <LinkCard href={link}>
            <div >
              <h4 className="Title">{title}</h4>
              <p className="BigText">{description}</p>
                
              {type === 'Area' ? (
                <div className="FirstVideoLink">
                  <a href="/teste">
                    <img className='playimg' src={play} alt="play" />
                    Primeiro video
                  </a>
                </div>
              ):(<></>)}
            </div>
            { true ? (
              <div>
                <button>
                  <img src={editing} alt="editing" />
                </button>
                <button className="Delete">
                  <img src={trash} alt="trash" />
                </button>
              </div>
            ):(<></>)
            }
          </LinkCard>
        </Content>
      </Container>
    </>
  );
}