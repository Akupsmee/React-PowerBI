import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "./modal";

const Idletimer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
      {isLoggedIn ? <h2>Hello Ikenna</h2> : 
      <>
      <h2>Hello Guest</h2>
      <p style = {{width: "80%", margin: "0 auto", fontSize : "50px"}}>Your session has expired, Click the login button to restore session.</p>
      <button style={{margin: "30px auto", width : "100px", fontSize: "30px"}} type="submit" onClick={setIsLoggedIn(true)}>Log In</button>
      </>
      }
      {isLoggedIn &&
      <>
       <iframe
          title = "iframe"
          width="800"
          height="400"
          src="https://app.powerbi.com/view?r=eyJrIjoiY2FjMzhkNDEtY2QwOC00ZTcwLTkxZmEtZjU1NGU2YmEwYjU0IiwidCI6IjBlMGVjNGVlLWUxMTAtNGVhYy1hOGFiLTQzMGM5MzEzMjlhMSJ9"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p style = {{width: "80%", margin: "0 auto", fontSize : "50px"}}>This is a report from power bi you created for XXX company on  28 June 2021.</p>
        
        </>
        }


      <Modal isOpen={modalIsOpen} onClick1={logOut} onClick2={stayActive}></Modal>

      <IdleTimer ref={idleTimerRef} timeout={20 * 1000} onIdle={onIdle} />
    </div>
  );
};

export default Idletimer;
