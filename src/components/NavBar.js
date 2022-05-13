import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import '../stylesheets/NavBar.css';
import Logo from "../imgs/Facundo Ferrari.svg";

export function Encabezado() {

    return (
        <Container>
            <Nav className="navBar justify-content-center">
                <Nav.Item>
                    <Image src={Logo} fluid/>
                </Nav.Item>
                <Nav id="secondBar">
                    <Nav.Item >
                        <Nav.Link className="barButton" href="#home">
                            <p className="subBarButton">Projects</p>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="barButton">
                        <Nav.Link href="#home">
                            <p className="subBarButton">About Me</p>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="barButton">
                        <Nav.Link href="#home">
                            <p className="subBarButton">Contact</p>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Nav>
        </Container>
    );
}