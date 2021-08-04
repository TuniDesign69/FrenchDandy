import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink } from './SidebarElements';

export const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
          <SidebarContainer isOpen = {isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>   
                   <SidebarWrapper>
                      <SidebarMenu>
                          <SidebarLink to="Home" isOpen = {isOpen} onClick={toggle}> HOME</SidebarLink>
                            <SidebarLink to="Product" isOpen = {isOpen} onClick={toggle}> PRODUCT</SidebarLink>
                             <SidebarLink to= "Collabs" isOpen = {isOpen} onClick={toggle}> COLLABS</SidebarLink>
                             <SidebarLink to="Blog" isOpen = {isOpen} onClick={toggle}> BLOG</SidebarLink>
                             <SidebarLink to="About" isOpen = {isOpen} onClick={toggle}> ABOUT</SidebarLink>
                              <SidebarLink to="Contact" isOpen = {isOpen} onClick={toggle}> CONTACT</SidebarLink>
                        </SidebarMenu>
                    </SidebarWrapper> 
          </SidebarContainer>  
        </>
    )
}
export default Sidebar; 
