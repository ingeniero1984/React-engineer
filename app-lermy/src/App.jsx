import React from 'react';

import {Button} from '@material-ui/core';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './temaConfig';

import Navbar from './components/Navbar';

function App()
{
    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <Button variant="contained" color="primary">
                botton
            </Button>
        </ThemeProvider>   
    );
}

export default App;