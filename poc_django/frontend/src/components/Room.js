import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
    const { roomCode } = useParams();
    const [votesToSkip, setVotesToSkip] = useState(5);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    function getRoomDetails(roomCode) {
        fetch('/api/get-room' + '?code=' + roomCode)
        .then((response) => response.json())
        .then((data) => {
            setVotesToSkip(data.votes_to_skip);
            setGuestCanPause(data.guest_can_pause);
            setIsHost(data.is_host);
        });
    }

    getRoomDetails(roomCode);
    return (
        <div>
        <h3>{roomCode}</h3>
        <p>Votes: {votesToSkip}</p>
        <p>Guest Can Pause: {String(guestCanPause)}</p>
        <p>Host: {String(isHost)}</p>
    </div>
    );
}
