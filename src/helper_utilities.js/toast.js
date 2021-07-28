import React from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();
const notify = () => {
  toast("Basic notification", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 9000,
  });
  toast.success("Success notification", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 10000,
  });
  toast.info("Info notification", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 12000,
  });
  toast.warn(<CustomToast />, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 15000,
  });
  toast.error("Error notification", {
    position: toast.POSITION.BOTTOM_CENTER,
  });
  toast("Basic notification", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: false,
  });
};


const Toast = () => {
    return (
      <div>
        <button onClick={notify}>Notify ! </button>
      </div>
    );
}

export default Toast
