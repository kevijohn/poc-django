import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return <div>
        <h1>testing react code blah</h1>
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage name='Kevs' />}/>
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </BrowserRouter>
      </div>;
  }
}