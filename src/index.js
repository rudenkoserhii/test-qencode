import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

reportWebVitals(console.log)
