import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd'
import styled from '@xstyled/styled-components'

const SquareImageStyled = styled.div`
  margin: 2em;
  border-radius: 25px;
  box-shadow: 0px 11px 29px rgba(25, 38, 21, 0.29);
  img {
    border: 1px solid rgba(255, 122, 99, 0.3);
    border-radius: 25px;
  }
`
const SquareImage = ({ isWithPreview, src }) => {
  return (
    <SquareImageStyled>
      <Image
        style={{ borderRadius: 25 }}
        preview={isWithPreview}
        placeholder
        src={src}
        width={300}
      />
    </SquareImageStyled>
  )
}

SquareImage.propTypes = {
  isWithPreview: PropTypes.bool,
  src: PropTypes.string.isRequired,
}

export default SquareImage
