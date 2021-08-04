import React from 'react'
import {FaBars, FaSearch} from 'react-icons/fa'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,SearchIcon } from './NavbarElements';
import Logo from '../../assets/logo_header.png'

import   './navbar.css'

 const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
           <NavbarContainer>
               <NavLogo to='/'>
                   <img src={Logo}/>
                   </NavLogo>
               <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
               <NavMenu>
                      <NavItem>
                         <NavLinks className="NavLinksActive" to="Home">HOME</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks className="NavLinksActive" to="Product">PRODUCT</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks className="NavLinksActive" to="CollABS">COLLABS</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks  className="NavLinksActive" to="Blog">BLOG</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks className="NavLinksActive" to="About">ABOUT</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks className="NavLinksActive" to="Contact">CONTACT</NavLinks>
                      </NavItem>
               </NavMenu>
               <SearchIcon>
                   <FaSearch />
               </SearchIcon>
            </NavbarContainer> 
        </Nav>
        </>
    )
}
export default Navbar ;