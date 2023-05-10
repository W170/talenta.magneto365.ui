import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Mulish", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Lato", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  ul {
      list-style-type: none;
      padding: 0;
    }
   li{
    list-style-type: none;
   } 
   a{
    text-decoration: none;
    color: black;
   }
  }
`

export default GlobalStyles
