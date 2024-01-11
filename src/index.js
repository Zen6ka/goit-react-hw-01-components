import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors:{
		black: '#202020',
    gray: '#818d91',
    white: '#FFFFFF',
    blue: '#75cbeb',
    lightblue: 'rgba(167, 175, 19, 0.30)',
    shadowblue: 'rgba(149, 152, 161, 0.75)',
    bgcolor: 'rgba(207, 226, 243, 0.90)',
  },

  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },

  spacing: value => `${value * 4}px`,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ThemeProvider theme = {theme}>
    <App />
		</ThemeProvider>
  </React.StrictMode>
);
