import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';
import './Root.css'

const Root = () => {
    // Navigation and pending ui er use
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>
            <div className='main-root'>
                <Sidebar></Sidebar>
                {isNavigating && <span>Loading is going on here...............</span>}
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