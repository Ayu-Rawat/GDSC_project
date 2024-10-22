import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import {link} from "react-router-dom";
import {SidebarData} from "./Sidebardata";
import "./Navbar.css";
import {IconContext} from "react-icons";

function Navbar() {
  return (
    <> 
      <IconContext.Provider value={{color:"undefined"}}>
        <div className='navbar'>
          <link to="#" className='menu-bars'>
            <FaSkullCrossbones.FaBars onclick={showSlidebar} />
          </link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
