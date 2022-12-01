import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContainer } from "../components/Login";
import { AuthContext } from "../Contexts/AuthContext";



export interface LoginProps {
}

export function Login() {

  const {user} = useContext(AuthContext);
  return (
    <>
      {(user >= 0)? (
        <Navigate to='/' />
      ): (
        <LoginContainer/>
      )}
    </>
  )
}