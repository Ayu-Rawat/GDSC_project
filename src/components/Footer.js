import React from "react";
import "./Navbar.css"

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (<div><footer><h1>Copyright © {year}</h1></footer></div>)
}

export default Footer;