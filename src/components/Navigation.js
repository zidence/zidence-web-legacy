import styled from '@xstyled/styled-components'
import { NavLink } from 'react-router-dom'
import { Col, Row } from 'antd'
import { CenterContent } from './BaseStylings'

const NavigationBox = styled(Row)`
  position: sticky;
  top: 0;
  height: 64px;
  padding: 0 2em;
  box-shadow: 0px 1px 15px rgba(25, 38, 21, 0.15);
  background-color: lighterBackground;
  z-index: 1;
`
const Logo = styled.img`
  height: 32px;
`
const Link = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  margin: 1em 2em;
  color: primary;
`
const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Navigation = () => {
  return (
    <NavigationBox align='middle'>
      <Col span={8}>
        <Link to='/'>Buy</Link>
        <Link to='/products'>Sell</Link>
      </Col>
      <Col span={8}>
        <CenterContent>
          <Logo src='images/logo.svg' alt='zidence logo' />
        </CenterContent>
      </Col>
      <Col span={8}>
        <AlignRight>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </AlignRight>
      </Col>
    </NavigationBox>
  )
}

export default Navigation
