import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import App from './App'


import { GlobalStyles } from './styles/utilities/Global.styled'

const theme = {
  blue : '#00BAFB',
  white: '#fff',
  dark: '#374955',
  light: '#9BAEBC',
  lightBrown: '#DDA25E',
  brown: '#A36E2D',

  navbarBg : '#DDA25E',

  inputField: '#f0f0f0',
  inputFieldIcon : '#acacac',
  submitButton: '#5995fd',
  submitButtonHover: '#4d84e2',

  red : '#b10b0b',
  goldGradient: 'radial-gradient(circle, #dda25e, #ce9552, #c08845, #b17b39, #a36e2d)',

  }



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<GlobalStyles />
	<ThemeProvider theme={theme}>
			<Router>
				<Routes>
				<Route path="/*" element={<App />} />
				</Routes>
			</Router>
	</ThemeProvider>
  </React.StrictMode>
)


