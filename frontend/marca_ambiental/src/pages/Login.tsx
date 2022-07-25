import React from "react";
import { LoginContainer } from "../components/Login";



export interface LoginProps {}

export const Login: React.FC<LoginProps> = props => {
  return (
    <div>
      <LoginContainer/>
    </div>
  )
}