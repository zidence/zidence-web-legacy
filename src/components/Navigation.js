import React from 'react'
import styled from '@xstyled/styled-components'
import { NavLink } from 'react-router-dom'

const NavigationStyled = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`
const TemporaryLogo = styled.h1`
  margin: 1em;
`
const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 1em;
`
const Link = styled(NavLink)`
  text-decoration: none;
  margin: 1em 1.5em;
`
const Navigation = () => {
  return (
    <NavigationStyled>
      <TemporaryLogo>Logo</TemporaryLogo>
      <NavLinks>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/about'>About</Link>
      </NavLinks>
    </NavigationStyled>
  )
}

export default Navigation
