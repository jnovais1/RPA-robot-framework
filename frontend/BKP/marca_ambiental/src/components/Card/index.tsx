import React from "react";
import { CardProps } from "../../App";
import { Container, Content } from "./styles";
import trash from "../../assets/trash.png";
import editing from "../../assets/editing.png";

export const Card: React.FC<CardProps> = ({title, description, type, link}) => {
  console.log(type);

  return (
    <>
      <Container> 
        <Content>
          <a href={link}>
            <div >
              <h4 className="Title">{title}</h4>
              <p className="BigText">{description}</p>
                
            </div>
            { false ? (
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

          </a>
        </Content>
      </Container>
    </>
  );
}