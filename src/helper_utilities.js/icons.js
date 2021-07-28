import React from 'react'
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";


const icons = () => {
    return (
      <IconContext.Provider value={{ color: "pink", size: "5rem" }}>
        <div className="App">
          <FaReact />
          <MdAlarm />
        </div>
      </IconContext.Provider>
    );
}

export default icons
