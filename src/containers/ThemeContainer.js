import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@xstyled/styled-components'

const theme = {
  colors: {
    primary: '#192615',
    secondary: '#8F9C8B',
    accent: '#FF7A63',
    lighterBackground: '#FEFEF1',
    background: '#FDF5E8',
  },
  fonts: {
    title: 'Coustard',
    primary: 'Montserrat',
  },
}

const ThemeContainer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContainer
