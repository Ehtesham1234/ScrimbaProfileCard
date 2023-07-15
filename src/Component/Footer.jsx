import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook , faTwitter, faInstagram,faGithub} from "@fortawesome/free-brands-svg-icons"
import React from "react";

export default function Footer(){
    return(
    <footer className="footer-contain">
        <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
        <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
        <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="http://github.com"><FontAwesomeIcon icon={faGithub}/></a>
    </footer>
    );
}