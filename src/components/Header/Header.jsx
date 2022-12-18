import React from 'react';
import {Container, Navbar} from "react-bootstrap";
// import LOGO from './logo белое.svg'
import './style.css';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand className='logo'>
                    <img
                        alt=""
                        src='https://mospolytech.ru/local/templates/main/dist/img/logos/mospolytech-logo-white.png'
                        // width="30"
                        height="30"
                        className="d-inline-block align-top my-1 mx-2"
                    />{' '}
                    Переводы и восстановления
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;