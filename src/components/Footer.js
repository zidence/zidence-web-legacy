import styled from '@xstyled/styled-components'

const FooterStyled = styled.div`
  display: flex;
`
const Illustration = styled.img`
  width: 100%;
`
const Footer = () => {
  return (
    <FooterStyled>
      <Illustration src='images/footer-illustration.svg' />
    </FooterStyled>
  )
}

export default Footer
