import { createGlobalStyle } from '@xstyled/styled-components'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
html, body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: background;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}`

export default GlobalStyle
