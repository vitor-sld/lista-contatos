import { createGlobalStyle } from "styled-components";

export const colors = {
    backgroundHeader: '#D9D9D9',
    border: '#000',
    searchBackground: '#ffffff',
    heightMain: 'calc(100vh + 92px + 96px)'
}
export const breakpoints = {
    mobile: '768px'
}

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
.container{
    width: 90vw;
    max-width: 1024px;
    margin: auto;
}
`

export default GlobalStyle