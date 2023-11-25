import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import NavItems from './navItems'
import HamburgerBtn from '../buttons/hamburgerBtn'
import Profile from '../profile'

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    px-3
    w-full
    flex
    flex-row
    items-center
    lg:pl-9
    lg:pr-9
    justify-between
  `}
`

function Navbar(){
  return <NavbarContainer>
    <HamburgerBtn/>
    <NavItems></NavItems>
    <Profile/>
  </NavbarContainer>
}

export default Navbar