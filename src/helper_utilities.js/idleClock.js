import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "./modal";

const Idletimer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const logOut = () => {
      setIsLoggedIn(false)
      setModalIsOpen(false)
       clearTimeout(sessionTimeoutRef.current);
      console.log('user has logged out');
  };
  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('user is active');
   
  };

  const onIdle = () => {
    console.log("user is idle");
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(()=>{
        logOut()
    },5000)
    
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Ikenna</h2> : <h2>Hello Guest</h2>}
      {isLoggedIn && <iframe
          title = "iframe"
          width="800"
          height="400"
          src="https://app.powerbi.com/view?r=eyJrIjoiY2FjMzhkNDEtY2QwOC00ZTcwLTkxZmEtZjU1NGU2YmEwYjU0IiwidCI6IjBlMGVjNGVlLWUxMTAtNGVhYy1hOGFiLTQzMGM5MzEzMjlhMSJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>}

      <Modal isOpen={modalIsOpen} onClick1={logOut} onClick2={stayActive}></Modal>

      <IdleTimer ref={idleTimerRef} timeout={100 * 1000} onIdle={onIdle} />
    </div>
  );
};

export default Idletimer;
