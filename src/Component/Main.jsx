import React from "react";

export default function Main(){
    return(
    <div className="main-content">
        <div>
        <header className="header-content">
        <h1 className="h1-name">Ehtesham Usman</h1>
        <h2 className="h2-occupation">Frontend Developer</h2>
        <h3 className="h3-website">usmanehtesham.website</h3>
        <div className="button-link">
        <button className="email-button">Email</button>
        <button className="linkedln-button">Linkedln</button>
        </div>  
    </header>
        </div>
    <div className="about-content">
        <h2 className="h2-content">About</h2>
        <p className="para-about">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
    <div className="interest-content">
    <h2 className="h2-interest">Interest</h2>
    <p className="para-interest">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
    </div>
    );
}