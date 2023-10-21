import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.cmp'
import { createGlobalStyle } from 'styled-components'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 1.25em;
    font-family: 'Chivo Mono', monospace;
    font-family: 'VT323', monospace;

    background: url(material-visualization/background.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
