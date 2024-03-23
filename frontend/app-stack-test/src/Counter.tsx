import { useState, useEffect } from 'react';
// import HttpCall from "./components/HttpCall";
// import WebSocketCall from "./components/WebSocketCall";
// import { io } from "socket.io-client";
// import { Socket } from 'socket.io';
import { socket } from './socket'


function Counter() {
    // const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("test")
        socket.on("connect", (data) => {
            console.log(data)
            setCount(data.data);
        });

        return () => {
            socket.off("connect");
        }

    }, [])

    return (
        <>
            <h2>Count</h2>
            <span>{count}</span>
        </>
    );
}

export default Counter;