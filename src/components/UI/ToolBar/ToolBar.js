import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import './ToolBar.css';
const ToolBar = () => {

    return (
        <header className='toolBar'>
            <Container>
                <NavLink to='/' className='toolBar-title'>Contacts App</NavLink>
                <NavLink to='/addContact'>Add New Contact!</NavLink>
            </Container>
        </header>
    );
};

export default ToolBar;