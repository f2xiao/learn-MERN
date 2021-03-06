import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";



const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#C8E6C9',
			main: '#4CAF50',
			dark: '#2E7D32',
			contrastText: '#fff'
		},
		secondary: {
			light: '#EF9A9A',
			main: '#F44336',
			dark: '#C62828',
			contrastText: '#000'
		},
		openTitle: green['400'],
		protectTitle: red['400'],
		type: 'dark'
	}
});

class App extends Component {
	render() {
		return (
      <Router>
        <MuiThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        </MuiThemeProvider>
			</Router>
		);
	}
}

export default App;