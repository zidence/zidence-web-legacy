import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'
import { backgroundImage } from '@xstyled/system'

const HeroStyled = styled.div`
  display: flex;
  width: 100%;
  height: 91vh;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
  ${backgroundImage}
`

const Hero = ({ children, backgroundPath }) => {
  return (
    <HeroStyled backgroundImage={`url(/${backgroundPath})`}>
      {children}
    </HeroStyled>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundPath: PropTypes.string.isRequired,
}

export default Hero
