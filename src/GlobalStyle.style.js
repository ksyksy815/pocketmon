import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow-color: rgb(251,215,67);
    --red-color: rgb(254,31,31);
    --sky-blue-color: rgb(92,185,255);
    --dark-blue-color: rgb(54,59,129);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`