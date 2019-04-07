import React from 'react'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {Link as RRNavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Row, Col} from "reactstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="6" >
                        <p className="text-muted text-center marg-bott-0">All rights are to Epic Games. </p>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                    <p className="text-muted text-center marg-bott-0">
                        Buy the developer a coffee <FontAwesomeIcon icon={faCoffee} className="marg-left-5" color="#cd6133" />
                    </p>
                    </Col>
                </Row>
            </Container>
        </footer>
        )
}

export { Footer }