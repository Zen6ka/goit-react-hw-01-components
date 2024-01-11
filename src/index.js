import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors:{
		black: '#202020',
    gray: '#818d91',
    white: '#FFFFFF',
    lightgray: '#d5d8e8',
    lightblue: 'rgba(165, 192, 217, 0.30)',
    shadowblue: 'rgba(149, 218, 237, 0.75)',
    bgcolor: 'rgba(207, 226, 243, 0.90)',
  },

  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },

	// SPACING (padding, margin)
  spacing: value => `${value * 4}px`,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ThemeProvider theme = {theme}>
    <App />
		</ThemeProvider>
  </React.StrictMode>
);
