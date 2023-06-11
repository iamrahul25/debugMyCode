import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { SocketProvider } from './context/SocketProvider';
import { UserContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserContextProvider>
            <SocketProvider>
                <App />
            </SocketProvider>
        </UserContextProvider>
    </BrowserRouter>
);

