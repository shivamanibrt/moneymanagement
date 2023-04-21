import React from 'react'
import FooterFile from '../Components/FooterFile';
import Header from '../Components/Header';
import { Container } from 'react-bootstrap';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <Container className='main'>
                {children}
            </Container>

            <FooterFile />
        </>
    )
}
