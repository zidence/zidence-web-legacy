import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`

html, body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: backdrop;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}`

export default GlobalStyle
