import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import eUkraineLight from '../assets/fonts/e-Ukraine-Light.otf';
import eUkraineRegular from '../assets/fonts/e-Ukraine-Regular.otf';
import eUkraineMedium from '../assets/fonts/e-Ukraine-Medium.otf';
import eUkraineHeadLight from '../assets/fonts/e-UkraineHead-Light.otf';
import eUkraineHeadRegular from '../assets/fonts/e-UkraineHead-Regular.otf';
import eUkraineHeadMedium from '../assets/fonts/e-UkraineHead-Medium.otf';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'e-Ukraine-Light';
  src: url(${eUkraineLight});
}

@font-face {
  font-family: 'e-Ukraine-Regular';
  src: url(${eUkraineRegular});
}

@font-face {
  font-family: 'e-Ukraine-Medium';
  src: url(${eUkraineMedium});
}

@font-face {
  font-family: 'e-Ukraine-Head-Light';
  src: url(${eUkraineHeadLight});
}

@font-face {
  font-family: 'e-Ukraine-Head-Regular';
  src: url(${eUkraineHeadRegular});
}

@font-face {
  font-family: 'e-Ukraine-Head-Medium';
  src: url(${eUkraineHeadMedium});
}

body {
  min-height: 100vh;  
  margin: 0;
  font-family: 'e-Ukraine-Light', sans-serif;
  font-size: 20px;
  font-style: normal;  
  font-weight: 300;
  line-height: normal;
  color: #2B2B2B;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  padding: 0;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
`;
