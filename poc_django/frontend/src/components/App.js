import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {
  
  return (
    <div>
    <h1>This is in app.js</h1>
    <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<HomePage name='Kevs' />}/>
    <Route path="/join" element={<RoomJoinPage />} />
    <Route path="/create" element={<CreateRoomPage />} />
    <Route path="/room/:roomCode" element={<Room />} />
  </Routes>
</BrowserRouter>
  </div>
    );
};

export default App;