import React from "react";
import MyPic from "../Images/MyPic.jpg"
export default function Header(){
    return(
    <div className="MyPic">
    <img src={MyPic} width="317px" height="317px"/>
    </div>
    );
}