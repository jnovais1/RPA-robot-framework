import React from "react";
import { Dashboard } from "../components/Dashboard";

export interface AboutProps {}

export const About: React.FC<AboutProps> = props => {
  return (
    <Dashboard>
      <div>
        <h1 >Sobre</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui.
          Hic animi distinctio et maiores, ab nostrum at neque. Iusto minus
          perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
        </p>
      </div>
    </Dashboard>
  )
}