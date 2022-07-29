import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Burger } from "./components/Burger";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Form} from "./pages/Form";
import { Video } from "./pages/Video";
import {Area} from "./pages/Area";
import { Login } from "./pages/Login";
import { User } from "./pages/User";


export interface AppProps {}

export interface CardProps {
  title: string;
  description: string;
  type: string;
  link: string;
}

export const App: React.FC<AppProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header >
        <Burger open={open} setOpen={setOpen} />
      </Header>

      <GlobalStyle />
      <BrowserRouter>
      
      <Sidebar open={open}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='area' element={<Area/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='forms' element={<Form/>}/>
        <Route path='video' element={<Video/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='admin' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}