import { Image } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import "../stylesheets/ProjectsSpace.css";
import '../stylesheets/AboutMe.css';
import "../stylesheets/Presentation.css";

import zerotwo from '../imgs/zerotwo.webp';
import Aboutlogo from '../imgs/About Me.svg';

export function AboutMe() {
    return (
        <div id="aboutMe" className="aboutme">
            <div id="aboutMeHeader">
                <Nav className="projects-logo">
                    <Nav.Item>
                        <Image src={Aboutlogo} fluid/>
                    </Nav.Item>
                </Nav>
                <h3 style={{'color': "gray"}}>Know me more</h3>
            </div>
            <div className="sansitabt-font presentation1">
                <div id="mySelfImage">
                    <Image  src={zerotwo} roundedCircle fluid/>
                </div>
                <div id="testimonio">
                    <h1>Hey, let me tell you about myself</h1>
                    <p className="text">
                        My name is Facundo Ferrari, I am 18 years old and I am a Technician and future Computer Systems Analyst. My great passion is programming and developing software solutions based on web development.
                    </p>
                </div>
            </div>
        </div>
    );
}