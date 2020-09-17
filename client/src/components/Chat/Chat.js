import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import io from "socket.io-client";

const Chat = () => {
  const [msg, setMsg] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => setMsg(data);
  const onError = (errors, e) => console.log(errors, e);

  const socket = io("http://localhost:5000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    if (Object.keys(msg).length > 0) {
      socket.emit("messageFromClient", msg);
    }
    socket.on("messageFromServer", (newMessage) => {
      alert(newMessage.chat);
    });
  }, [msg]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input name="chat" ref={register} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Chat;
