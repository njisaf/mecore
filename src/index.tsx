import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import { ExamplePage } from './pages/ExamplePage';
import './types/foundry';

// Initialize the module
Hooks.once('init', async function() {
    console.log('MECore | Initializing mecore');

    // Register module settings here
});

// Wait for the game to be ready
Hooks.once('ready', async function() {
    console.log('MECore | Ready');

    // Mount React app when character sheet is rendered
    Hooks.on('renderActorSheet', (app: any, html: JQuery, data: any) => {
        const rootElement = document.createElement('div');
        html[0].appendChild(rootElement);

        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ExamplePage />
                </ThemeProvider>
            </React.StrictMode>
        );
    });
});
