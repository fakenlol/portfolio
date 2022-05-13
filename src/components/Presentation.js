import "../stylesheets/Presentation.css";
import { Image } from "react-bootstrap";
import bgImage from "../imgs/Purple-in-Basic2.png";
import { Container } from "react-bootstrap";

export function Presentation() {
    return (
        <div className="sansitabt-font presentation">
            <div id="testimonio">
                <h1>Hello, welcome to my portfolio!</h1>
                <p className="text">
                    My name is Facundo Ferrari, I am 18 years old and I am a Technician and future Computer Systems Analyst. My great passion is programming and developing software solutions based on web development.
                </p>
            </div>
            <Image  src={bgImage} fluid/>
        </div>
    );
}