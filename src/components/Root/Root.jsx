import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='main-root'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;


/**
 * 1.use : userPromise> suspense > promise > use(usersPromise)
 * 2.[less used so far] > useState + useEffect (()=>{},[])
 * 3.set loader in the route definition: load data before router component is rendered
 * */ 