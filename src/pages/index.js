import React, {useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

import Cards from '../components/InfoSection/Cards';

import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import Banner from '../components/Banner2/Banner';
import Landing from '../components/Landing/Landing';
import Event from '../components/Event/Event';
import Gallerie from '../components/Gallerie/Gallerie';

export const Home = () => {
    const [isOpen , setIsOpen ] = useState(false);
    const toggle = ()=> {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle = {toggle}/>
            <Landing/>
            <Cards/>
            <Gallerie/>
            <Banner/>
            <Form/>
           <Footer/>
        </>
    )
}

export default Home