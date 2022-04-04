import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  
 
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-size: 1.2em;
  outline: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  display: inline-block;
  cursor: pointer;
  font-style: inherit;
}
ul, 
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
link {
  text-decoration: none;
  margin: 0px;
  padding: 0px;
}
h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
  margin: 0px;
  padding: 0px;
}
`;
