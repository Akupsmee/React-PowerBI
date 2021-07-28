import React, { useState } from "react";
import Modal from "react-modal";


Modal.setAppElement("#root"); // for accessibility on the browser, takes care of error warnings.

const Modal1 = ({ isOpen, onClick1, onClick2 }) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        // onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            background: "grey",
          },
          content: {
            color: "black",
          },
        }}
      >
        <h3>Hi dear</h3>
        <p>You have been idle for a while, you will be looged out soon</p>
        
        

        <div>
          <button onClick={onClick1}>Log me out</button>
          <button onClick={onClick2}>keep me In</button>
        </div>
        {/* <button onClick={() => setIsOpen(false)}>Close Modal</button> */}
      </Modal>
    </div>
  );
};

export default Modal1;


