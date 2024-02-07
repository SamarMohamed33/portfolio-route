import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Copyrights from '../../components/Copyrights/Copyrights';

function MainLayout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <Copyrights/>
        </>
    );
}

export default MainLayout;