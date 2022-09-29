import React from "react";
import "../App.css";
import LoginButton from "./login";



export default function Paralax() {
  return (
    <div>
      <div className="bgimg-1">
      <h1 className="intro" href="/login">Buscas mascota?</h1>
        <div className="caption">
          <h1 className="intro" href="/login">Empieza ya !</h1>
          <h1 className="intro2"><LoginButton/></h1>
        </div>
      </div>
    </div>
  );
}
