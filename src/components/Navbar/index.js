import React from 'react'
import {FaBars, FaSearch} from 'react-icons/fa'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,SearchIcon } from './NavbarElements';
import Logo from '../../assets/logo_header.png'

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
                         <NavLinks to="Home">HOME</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks to="Product">PRODUCT</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks to="CollABS">COLLABS</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks to="Blog">BLOG</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks to="About">ABOUT</NavLinks>
                      </NavItem>
                      <NavItem>
                      <NavLinks to="Contact">CONTACT</NavLinks>
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