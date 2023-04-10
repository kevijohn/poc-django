import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
    const { roomCode } = useParams();
    //const {votesToSkip, guestCanPause, isHost} = useState({votesToSkip: 2, guestCanPause: false, isHost: false});
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);
    return (
        <div>
        <h3>{roomCode}</h3>
        <p>Votes: {votesToSkip}</p>
        <p>Guest Can Pause: {String(guestCanPause)}</p>
        <p>Host: {String(isHost)}</p>
    </div>
    );
};

export default Room;

